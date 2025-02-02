import { useState } from 'react'
import './App.css'
import './index.css'
import InputBox from './components'
import useCurrencyInfo from './hooks/CurrencyInfo';


function App() {
  const [amount,setAmount]=useState("");
  const [from,setFrom]=useState("USD")
const [to,setTo]=useState("INR");
const [convertedAmount ,setConvertedAmount]=useState(0);
const currencyInfo=useCurrencyInfo(from);
 const options=Object.keys(currencyInfo);
 const y=function swapcurrency(){
  // const newFrom = to;
  // const newTo = from;
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount)

}
// useEffect(() => {
//   // Automatically trigger conversion when the 'from' or 'to' currency changes
//   if (amount && currencyInfo[to]) {
//     setConvertedAmount(amount * currencyInfo[to]);
//   }
// }, [from, to, amount, currencyInfo]);
//  const isDisabled=true;

const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to]);
}
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://wallpapers.com/images/featured/stock-market-pd5zksxr07t7a4xu.jpg)`,
        }}
      >

<div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setFrom(currency)
                                
                                }}
                                
                                onAmountChange={(amount)=>{
                                  setAmount(amount)
                                }}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-1">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={y}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setTo(currency)
                                
                                }}
                             
                                disabled={true}
                                selectCurrency={to}
                            />
                        </div>
                        <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
          </div>
   
    

    </>
  )
}

export default App
