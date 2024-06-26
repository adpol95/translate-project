import {useEffect, useState} from "react";
import {useAppDispatch} from "@/app/lib/hooks";
import {toggleCookie} from "@/app/lib/features/cookieSlice";

export default function useFetch(url, name, setOn) {
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
                    setData(jsonData);
                } catch (error) {
                    setError(error);
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
                        setOn: setOn
                    }),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                dispatch(toggleCookie(jsonData));
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, name, setOn]);
    return {data, isLoading, error};
}
