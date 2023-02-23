import { useEffect, useState } from "react";

export const useFetch = (url, reload=false) => { 
    
    const [data, setData] = useState(null);

    // Used to show progress in view
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(()=>{

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch {
                setErrorMsg('An error ocurried when fetch data');
            }

            setLoading(false);
        };

        fetchData();
    
    }, [url, reload]);

    return {data, loading, errorMsg};
};