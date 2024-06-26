import {useEffect, useState} from "react";
import {useAppDispatch} from "@/app/lib/hooks";
import {toggleCookie, toggleEvents} from "@/app/lib/features/favoriteSlice";

export default function useFetch(url, name, chngUsr, value, type) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            if (name === "get") {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const jsonData = await response.json();
                    const userIsAuth = JSON.parse(jsonData).find(el => el.name.startsWith("auth") && el.value.includes("OK"));
                    dispatch(toggleCookie(userIsAuth));
                    setData(userIsAuth);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
                try {
                    const res = await fetch(`${process.env.url}api/chat-gpt`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                page: null,
                                type: "events",
                            }),
                            cache: "no-store",
                        });
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const jsonData = await res.json();
                    dispatch(toggleEvents(jsonData))
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            } else try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        chngUsr: chngUsr,
                        value: value
                    }),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                if (chngUsr) dispatch(toggleCookie(type ? JSON.parse(jsonData) : undefined));
                setData(JSON.parse(jsonData));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, name, chngUsr, value, type, dispatch]);
    return {data, isLoading, error};
}
