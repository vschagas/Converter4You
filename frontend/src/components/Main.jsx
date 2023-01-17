import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Main() {

  const [baseCoin, setBaseCoin] = useState('')
  const [exchangeCoin, setExchangeCoin] = useState('')
  const [response, setResponse] = useState(undefined)
  const [amount, setAmount] = useState('')

  async function handleData(e) {
		// e.preventDefault();
    console.log(e);

		const response = await axios
			.post('http://localhost:3001',
				{
					baseCoin: baseCoin,
					exchangeCoin: exchangeCoin,
				}, // body
				
			);
    setResponse(response);
	}

  const log = (e) => {
    console.log(e);
  }

  const convertValue = (amount) => {
    
  }

  const rates = ["USD", "BRL", "EUR", "BTC", "ETH" ]
  return (
    <div>
      <input type="text" onChange={(e) => setAmount(e.target.value)}/>
      <select>
        {rates.map((rate) => <option>{rate}</option>)}
      </select>
    <input type="text" />
      <select onChange={console.log('ENTREI')}>
        {rates.map((rate) => (
          <option value={rate} onChange>{rate}</option>
        ))}
      </select>
      {/* <button type='button'  onClick={() => handleData()}>Convert</button>
      <button type='button' onClick={() => log()}>LOG</button> */}
    </div>
  )
}