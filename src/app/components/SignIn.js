"use client";
import Link from "next/link";
import {useState} from "react";
import CookieSetBtn from "@/app/components/CookieSetBtn";
import DelOrUpdtBtns from "@/app/components/DelOrUpdtBtns";

export default function SignIn(props) {

    const [authIsPass, setAuthIsPass] = useState(props.cookieAuth);
    const [authMenu, setAuthMenu] = useState(false);
    const [anima, setAnima] = useState(true);
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrPassword, setCnfrPassword] = useState(authIsPass ? authIsPass.value.slice(authIsPass.value.lastIndexOf("?") + 1) : "");
    const styleForm = `${authMenu ? "block" : "hidden"}  absolute bg-orange flex flex-col p-5 rounded-b-lg top-[5vw] shadow-md ${anima ? "animate-slideIn" : "animate-slideOut"}`;
    const statusFromCookie = authIsPass ? authIsPass.value.slice(authIsPass.value.indexOf("=") + 1, authIsPass.value.lastIndexOf("?")) : "";
    return (
        <div className="relative">
            <button onClick={() => {
                setCounter(counter + 1);
                if (counter % 2 === 0) {
                    setAuthMenu(!authMenu);
                    setAnima(true);
                } else {
                    setAnima(false);
                    setTimeout(() => setAuthMenu(!authMenu), 500);
                }
            }}>
                {props.ln === "en" ? "Authorization" : "Авторизация"}
            </button>
            {statusFromCookie === "OK" ?
                <div className={`${styleForm} text-center left-[-.5em]`}>
                    <button onClick={() => {
                        setCounter(counter + 1);
                        if (counter % 2 === 0) {
                            setAuthMenu(!authMenu);
                            setAnima(true);
                        } else {
                            setAnima(false);
                            setTimeout(() => setAuthMenu(!authMenu), 500);
                        }
                    }}>
                        <Link href={`${process.env.url}${props.ln}/authorization`}>
                            {props.ln === "en" ? "Profile" : "Личный кабинет"}
                        </Link>
                    </button>
                    <DelOrUpdtBtns ln={props.ln} cook={authIsPass.value}/>
                </div>
                : <form
                    className={`${styleForm} left-[-5em]`}>
                    <label htmlFor="fname">{props.ln === "en" ? "Name:" : "Имя:"}</label><br/>
                    <input className="text-black" type="text" id="name" name="name" value={name}
                           onChange={(e) => setName(e.target.value)}/><br/>
                    <label htmlFor="lname">{props.ln === "en" ? "Password:" : "Пароль:"}</label><br/>
                    <input className="text-black" type="text" id="passw" name="passw" value={password}
                           onChange={(e) => setPassword(e.target.value)}/><br/>
                    {!authIsPass || statusFromCookie === "not" ?
                        <>
                            <label
                                htmlFor="passRetr">{props.ln === "en" ? "Confirm password:" : "Подтвердите пароль:"}</label><br/>
                            <input className="text-black" type="text" id="cnfPassw" name="cnfPassw" value={cnfrPassword}
                                   onChange={(e) => setCnfrPassword(e.target.value)}/><br/>
                        </>
                        : <></>}
                    <CookieSetBtn ln={props.ln} name={name} ps={password} cnPs={cnfrPassword}/>
                </form>
            }
        </div>
    )
        ;
}
