import { useState } from "react";
import './App.css'
import Input from './components/input'
import useCurrency from './hooks/customhook.js'
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)
  const datas = useCurrency(from)
  const optionValues = Object.keys(datas)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }

  const convert = () => {

    setConvertedAmt(amount * datas[to].toFixed(3))
  }

  return (
    <div
      className=" bg-green-300 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"

    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                onAmtchange={setAmount}
                curOptions={optionValues}
                onselectCur={setFrom}
                curSelect={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmt}
                onAmtchange={setConvertedAmt}
                curOptions={optionValues}
                onselectCur={setTo}
                curSelect={to}
                amtDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
