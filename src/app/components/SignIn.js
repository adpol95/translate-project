"use client";
import Link from "next/link";
import {useState} from "react";
import CookieSetBtn from "@/app/components/CookieSetBtn";
import DelBtn from "@/app/components/DelBtn";

export default function SignIn(props) {
    const [formState, setFormState] = useState({
        name: "",
        password: "",
        cnfrPassword: ""
    })
    const [authMenu, setAuthMenu] = useState(false);
    const [registnBtn, setRegistnBtn] = useState(false);
    const locTitles = {
        prfl: {
            en: "Profile",
            ru: "Личный кабинет"
        },
        reg: {
            en: "Registration",
            ru: "Регистрация"
        },
        auth: {
            en: "Authorization",
            ru: "Авторизация"
        },
        confirmPass: {
            en: "Confirm password:",
            ru: "Подтвердите пароль:"
        },
    }

    const popUpMenu = (event) => {
        event.preventDefault();
        setAuthMenu(!authMenu);
    }
    const changeInput = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }
    const styleForm = `bg-orange p-[12vw] rounded-lg relative flex flex-col gap-2`;
    const hoverTextYellow = "hover:text-yellow transition-colors delay-30 active:text-gray-dark";


    return (
        <div className="group flex flex-col relative">
            <button onClick={popUpMenu} className={hoverTextYellow}>
                <Link href={props.cookieAuth ? `${process.env.url}${props.ln}/authorization` : ""}>
                    {locTitles.prfl[props.ln]}
                </Link>
            </button>
            {props.cookieAuth ?
                <DelBtn ln={props.ln}
                        an={authMenu}
                        hy={hoverTextYellow}/>
                :
                <div id="outer" className={`${authMenu ? "opacity-100" : "opacity-0 pointer-events-none"} fixed flex justify-center items-center transition-opacity duration-450 ease-out left-0 right-0 top-0 bottom-0 bg-gray-opac cursor-pointer`} onClick={(event) => event.target.id === "outer" ? popUpMenu(event) : ""}>
                    <form className={styleForm}>
                        <label
                            className="font-bold text-center pb-5 text-[3vw]">{registnBtn ? locTitles.reg[props.ln] : locTitles.auth[props.ln]}</label>
                        <label htmlFor="fname">{props.ln === "en" ? "Name:" : "Имя:"}</label>
                        <input className="text-black" type="text" id="name" name="name" value={formState.name}
                               onChange={changeInput}/>
                        <label htmlFor="lname">{props.ln === "en" ? "Password:" : "Пароль:"}</label>
                        <input className="text-black" type="password" id="password" name="password"
                               value={formState.password}
                               onChange={changeInput}/>
                        {registnBtn ?
                            <>
                                <label
                                    htmlFor="passRetr">{locTitles.confirmPass[props.ln]}</label>
                                <input className="text-black" type="password" id="cnfrPassword" name="cnfrPassword"
                                       value={formState.cnfrPassword}
                                       onChange={changeInput}/>

                            </>
                            :
                            <></>
                        }
                        <button onClick={(event) => {
                            event.preventDefault();
                            setRegistnBtn(!registnBtn);
                        }}
                                className={hoverTextYellow}>{!registnBtn ? locTitles.reg[props.ln] : locTitles.auth[props.ln]}</button>
                        <CookieSetBtn ln={props.ln}
                                      name={formState.name}
                                      ps={formState.password}
                                      cnPs={formState.cnfrPassword}
                                      regState={registnBtn}
                                      auth={authMenu}
                                      hy={hoverTextYellow}
                        />
                        <button className={`${hoverTextYellow} absolute right-[1.5vw] top-1.5 text-[1.7em] cursor-pointer`}
                                onClick={popUpMenu}>&#10006;
                        </button>
                    </form>
                </div>
            }
        </div>
    )
        ;
}
