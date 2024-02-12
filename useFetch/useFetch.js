import { useEffect, useState } from "react"

export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        //Agregar try y catch
        setState({
            data,
            isLoading: false,
            hasError: null
        })
    };

    useEffect(() => {
        getFetch();
        //Cuando la URL cambie
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
