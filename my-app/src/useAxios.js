// cd my-app
// npm install axios
import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading : true,
        error : null,
        data : null
    });
    const [trringer, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading : true
        });
        setTrigger(Date.now());
    }
    useEffect(() => {
        if(!options.url) {
            return;
        }
        axiosInstance(options).then(data => {
            setState({
                ...state,
                loading : false,
                data 
            });
        }).catch(error => {
            setState({...state, loading:false, error})
        });
    }, [trringer]);
    return {...state, refetch};
};

export default useAxios;