import { useEffect, useState } from "react";

export const usePut = (url) => {

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
    };

    useEffect(() => {
        const httpRequest = async () => {
            let fetchOptions = [url, config];
            const response = await fetch(...fetchOptions);
            console.log(response);
            const json = await response.json();
        };

        httpRequest();

    }, [config, url]);

    return { httpConfig };
};
