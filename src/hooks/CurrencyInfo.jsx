import { useState,useEffect } from "react"
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/aff6da4992b7b69bd6f381c3/latest/${currency}`).then((res)=> res.json()).then((data)=>setData(data.conversion_rates));
    },[currency]);
    // console.log(data);
    return data;

}
export default useCurrencyInfo;