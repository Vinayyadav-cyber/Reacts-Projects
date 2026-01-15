import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import backgroundImage from './assets/currency.png'
import './index.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    setFrom((prev) => {
      setTo(prev)
      return to
    })
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (!currencyInfo[to]) return
    setConvertedAmount(amount * currencyInfo[to])
  }

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading currency data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-red-600">
        <p>Error loading currency data</p>
      </div>
    )
  }

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-black px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-black px-4 py-3 rounded-lg disabled:opacity-50"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
