"use client";
import Link from "next/link";
import {useState} from "react";
import CookieSetBtn from "@/app/components/CookieSetBtn";
import DelBtn from "@/app/components/DelBtn";

export default function SignIn(props) {
    const [mainState, setMainState] = useState({
        authIsPass: props.cookieAuth,
        authMenu: false,
        anima: true,
        counter: 0,
        name: "",
        password: "",
        cnfrPassword: "",
        registBtn: false
    })
    const popUpMenu = () => {
        if (!mainState.authIsPass) {
            if (mainState.counter % 2 === 0) {
                setMainState({
                    ...mainState,
                    counter: mainState.counter + 1,
                    authMenu: !mainState.authMenu,
                    anima: true
                });
            } else {
                setMainState({...mainState, counter: mainState.counter + 1, anima: false});
                setTimeout(() => setMainState({
                    ...mainState,
                    counter: mainState.counter + 1,
                    authMenu: !mainState.authMenu
                }), 500);
            }
        }
    }
    const changeInput = (event) => {
        setMainState({...mainState, [event.target.name]: event.target.value})
    }
    const styleForm = `${mainState.authMenu ? "flex" : "hidden"} top-[1.6vw] absolute bg-orange flex flex-col p-5 rounded-b-lg`;
    return (
        <div className="group relative flex flex-col">
            <button onClick={popUpMenu} className="hover:text-yellow transition-colors delay-30 active:text-gray-dark">
                {mainState.authMenu ? mainState.registBtn ? <p>
                            {props.ln === "en" ? "Registration" : "Регистрация"}
                        </p> :
                        <p>{props.ln === "en" ? "Authorization" : "Авторизация"}</p>
                    :
                    <Link href={mainState.authIsPass ? `${process.env.url}${props.ln}/authorization` : ""}>
                        {props.ln === "en" ? "Profile" : "Личный кабинет"}
                    </Link>
                }
            </button>
            {mainState.authIsPass ?
                <DelBtn ln={props.ln} cook={mainState.authIsPass.value} st={styleForm} an={mainState.anima}/>
                :
                <form
                    className={`${styleForm} left-[-4.5em] ${mainState.anima ? "animate-slideIn" : "animate-slideOut"}`}>
                    <label htmlFor="fname">{props.ln === "en" ? "Name:" : "Имя:"}</label><br/>
                    <input className="text-black" type="text" id="name" name="name" value={mainState.name}
                           onChange={changeInput}/><br/>
                    <label htmlFor="lname">{props.ln === "en" ? "Password:" : "Пароль:"}</label><br/>
                    <input className="text-black" type="password" id="password" name="password"
                           value={mainState.password}
                           onChange={changeInput}/><br/>
                    {mainState.registBtn ?
                        <>
                            <label
                                htmlFor="passRetr">{props.ln === "en" ? "Confirm password:" : "Подтвердите пароль:"}</label><br/>
                            <input className="text-black" type="password" id="cnfrPassword" name="cnfrPassword"
                                   value={mainState.cnfrPassword}
                                   onChange={changeInput}/><br/>
                            <button onClick={() => setMainState({
                                ...mainState,
                                registBtn: !mainState.registBtn
                            })}
                                    className="hover:text-yellow transition-colors delay-30 active:text-gray-dark"> {props.ln === "en" ? "Authorization" : "Авторизация"}</button>
                        </>
                        : <button onClick={() => setMainState({
                            ...mainState,
                            registBtn: !mainState.registBtn
                        })}
                                  className="hover:text-yellow transition-colors delay-30 active:text-gray-dark">{props.ln === "en" ? "Registration" : "Регистрация"}</button>
                    }
                    <br/>
                    <CookieSetBtn ln={props.ln}
                                  name={mainState.name}
                                  ps={mainState.password}
                                  cnPs={mainState.cnfrPassword}
                                  regState={mainState.registBtn}
                                  auth={mainState.authIsPass}/>
                </form>
            }
        </div>
    )
        ;
}
