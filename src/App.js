import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://openexchangerates.org/api/latest.json?app_id=ebdc8af2309c4a7f82763d05a524311f'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })
  }, [])

  console.log('api:')
  console.log(currencyOptions)
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow 
      currencyOptions = {currencyOptions}
      />
      <div className = "equals"> =</div>
      currencyOptions = {currencyOptions}
      <CurrencyRow />

    </>
  );
}


export default App;
