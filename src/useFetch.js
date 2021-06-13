import { useState, useEffect } from "react";


const useFetch = (url) => {
   
    const AbortCont = new AbortController();

    const [data, setData] = useState(null);
    const[isPending,setIsPending] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
      //  console.log("use Effect called !!!");
        fetch(url, {signal: AbortCont.signal })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            setData(data)
            setIsPending(false)
        })
        .catch(err => {
            if(err === "AbortError")
            {
                console.log("Fetch Aborted")
            }
            else 
            {
                console.log(err)
            }
        }) },1000);
        
        return ()=> AbortCont.abort();
    },[url]);

    return {data, isPending}
}

export default useFetch;