import { useState, useEffect } from 'react';

const useFetch = (url, setData) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setData(data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                setError(e.message);
            }
        })();
    }, [url, setData]);
    return { error, isLoading };
}

export default useFetch;