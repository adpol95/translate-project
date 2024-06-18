import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {
    const body = await request.json();
    // const endOfYear = [4, 4, 5, 4, 4]; // Available amount of iterations for create random years
    // const sortByYear = data.map(el => { // By loop, create in every news object new property "year", with random year
    //     const rndm = Math.floor(Math.random() * 5);
    //     let year = el.en.date.slice(0, 3);
    //     if (endOfYear[rndm]) { // If we have available iterations on current index, then we create random year for current news object
    //         const newYear = year + rndm;
    //         endOfYear[rndm] = endOfYear[rndm] - 1
    //         return {
    //             en: {title: el.en.title, description: el.en.description},
    //             ru: {title: el.ru.title, description: el.ru.description},
    //             date: el.en.date.replace(/\d\d\d\d/, newYear),
    //             year: newYear
    //         };
    //     } else { // Otherwise, we will find in our stash(endOfYear) available index for create new random year for current news object. Loop will work, until finding available(value is non 0) index.
    //         for (let r = Math.floor(Math.random() * 5); true; r = Math.floor(Math.random() * 5)) {
    //             if (r === rndm || endOfYear[r] === 0) continue;
    //             else {
    //                 const newYear = year + r;
    //                 endOfYear[r] = endOfYear[r] - 1
    //                 return {
    //                     en: {title: el.en.title, description: el.en.description},
    //                     ru: {title: el.ru.title, description: el.ru.description},
    //                     date: el.en.date.replace(/\d\d\d\d/, newYear),
    //                     year: newYear
    //                 };
    //             }
    //         }
    //     }
    // });

    // let counterForNews = 0;
    // const sortByYear = data.map((el, i) => {
    //     if (i % 4 === 0) counterForNews++;
    //     return {
    //         en: {title: el.en.title, description: el.en.description},
    //         ru: {title: el.ru.title, description: el.ru.description},
    //         date: new Date(el.en.date.replace(/\d\d\d\d/, "202" + counterForNews)),
    //         year: "202" + counterForNews
    //     }
    // })

    const readyNews = data.map(el => new Object({
        en: {title: el.en.title, description: el.en.description},
        ru: {title: el.ru.title, description: el.ru.description},
        date: isNaN(el.en.date[2]) ? new Date(el.en.date.split("." || "-").reverse().join("." || "-")) : new Date(el.en.date), // Доп проверка, пока только двух варицациий, д.м.г или г.м.д
    })).sort((a, b) => a.date - b.date); // *1 Начальная сортировка - по убыванию
    const newsInYears = {};
    readyNews.forEach(el => {
        const currentYear = el.date.getFullYear();
        const exists = newsInYears[currentYear];
        newsInYears[currentYear] = exists ? [...exists, el] : [el]
    }); // Переформатирование данных в обьектный тип, для лучшего удобства работы на клиенте, а именно - дробления по годам

    // const readyArray = [];
    // let containerYear = [];
    // sortByYear.forEach((el, i) => {
    //     i += 1;
    //     if (i && i % 4 === 0) {
    //         readyArray.push(containerYear);
    //         containerYear = [];
    //     } else containerYear.push(el);
    // });
    //
    // const downNews = newsInYears.map(el => el.sort((a, b) => a.date.getMonth() + b.date.getMonth() + 1));

    const upperNews = Object.entries(newsInYears).sort((a, b) => b[0] - a[0]);
    if (body.type === "events" || body.sort === "down") return NextResponse.json(upperNews);
    if (body.sort === "up") return NextResponse.json(Object.entries(newsInYears)); // *1

    if (body.type === "exact") {
        return NextResponse.json(data[body.page - 1])
    }

    const dividedNews = [];
    let twoNews = [];
    data.forEach((item, i) => {
        twoNews.push(item);
        if (!Number.isInteger(i / 2)) {
            dividedNews.push(twoNews);
            twoNews = [];
        }
    })
    if (body.page && body.page <= dividedNews.length) {
        return NextResponse.json({news: dividedNews[body.page - 1], pagination: {pages: dividedNews.length}})
    } else return NextResponse.json(null)
}
