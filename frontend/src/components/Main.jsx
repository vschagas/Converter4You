import React, { useState } from 'react'
import axios from 'axios'

export default function Main() {

  const [baseCoin, setBaseCoin] = useState('BRL')
  const [exchangeCoin, setExchangeCoin] = useState('USD')
  const [response, setResponse] = useState(undefined)

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

  const log = () => {
    console.log(response);
  }

  return (
    <div>
      <input type="text"/>
      <select>
        <option onChange={e => setBaseCoin(e.target.value)} value="EUR">EUR</option>
      </select>
    <input type="text" />
      <select>
        <option onChange={e => setExchangeCoin(e.target.value)} value="BRL">BRL</option>
      </select>
      <button type='button'  onClick={() => handleData()}>Convert</button>
      <button type='button' onClick={() => log()}>LOG</button>
    </div>
  )
}