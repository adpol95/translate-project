export default function LanguagePic({params}) {
    const data = {
        ru: "С 6 по 9 июня на выводном круге Центра национальных конных традиций на ВДНХ пройдет первенство России по конкуру среди юных всадников, выступающих на лошадях до 150 сантиметров в холке.Официальный портал Мэраи Правительства Москвы",
        en: "From June 6 to 9, the Russian show jumping championship among young riders competing on horses up to 150 centimeters at the withers will be held at the breeding circle of the Center for National Equestrian Traditions at VDNKh. Official portal Mariah of the Moscow Government",
        fr: "Du 6 au 9 juin, le championnat russe de saut d'obstacles parmi les jeunes cavaliers concourant sur des chevaux jusqu'à 150 centimètres au garrot aura lieu au cercle d'élevage du Centre des traditions équestres nationales de VDNKh. Portail officiel Mariah du gouvernement de Moscou."
    }

    return (
        <main>
            <h1>{data[params.locale]}</h1>
        </main>
    )
}