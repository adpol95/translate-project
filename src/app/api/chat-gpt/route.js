import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {
    const body = await request.json();
    const endOfYear = [4, 4, 5, 4, 4];
    const sortByYear = data.map(el => {
        const rndm = Math.floor(Math.random() * 5);
        let year = el.en.date.slice(0, 3);
        if (endOfYear[rndm]) {
            const newYear = year + rndm;
            endOfYear[rndm] = endOfYear[rndm] - 1
            return {
                en: {title: el.en.title, description: el.en.description},
                ru: {title: el.ru.title, description: el.ru.description},
                date: el.en.date.replace(/\d\d\d\d/, newYear),
                year: newYear
            };
        } else {
            for (let r = Math.floor(Math.random() * 5); true; r = Math.floor(Math.random() * 5)) {
                if (r === rndm || endOfYear[r] === 0) continue;
                else {
                    const newYear = year + r;
                    endOfYear[r] = endOfYear[r] - 1
                    return {
                        en: {title: el.en.title, description: el.en.description},
                        ru: {title: el.ru.title, description: el.ru.description},
                        date: el.en.date.replace(/\d\d\d\d/, newYear),
                        year: newYear
                    };
                }
            }
        }
    });
    const testArray = [[], [], [], [], []];
    sortByYear.forEach(el => {
        // console.log(el.year[el.year.length - 1])
        testArray[el.year[el.year.length - 1]].push(el);
    });
    const downNews = testArray.map(el => el.sort((a, b) => a.date.slice(5,7)  + b.date.slice(5,7)));
    const upperNews = [...downNews].sort((a, b) => b[0].year - a[0].year);
    // console.log(sortByYear.sort((a, b) => a.date.slice(5,7) + b.date.slice(5,7) && a.year - b.year))
    if (body.type === "events" || body.sort === "down") return NextResponse.json(upperNews);
    if (body.sort === "up") return NextResponse.json(downNews);
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
