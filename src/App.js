import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

//api url
const api_url = 'https://openexchangerates.org/api/latest.json?app_id=ebdc8af2309c4a7f82763d05a524311f'

function App() {
  //return a stateful value

  const [currencyOptions, setCurrencyOptions] = useState(0)

  useEffect(() => {
    fetch(api_url)
    .then(res => res.json())
    .then(data => {
      //setCurrencyOptions function to update the state
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })
  }, [])

  console.log('api:')
  console.log(currencyOptions)
  return (
    <div>
      <h1>Currency Calculator</h1>
      <CurrencyRow 
      currencyOptions = {currencyOptions}
      />

      <div className = "equals"> = </div>
      
      <CurrencyRow
      currencyOptions = {currencyOptions}
      />

    </div>
  );
}


export default App;
