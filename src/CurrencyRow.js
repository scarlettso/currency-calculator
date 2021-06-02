import React from 'react'

export default function CurrencyRow() {
    console.log('props')
    console.log(props)
    console.log(typeof props)
    const {currencyOptions} = props
    let currOpt = Array.from(props)
    console.log('currOPT...')
    console.log(currOpt)
    console.log(typeof currOpt)
    console.log('currencyOptions')
    console.log(currencyOptions)
    console.log(typeof currencyOptions)
    return (
        <div>
            <input type = "number" className = "input" />
            <select>
                for (let i = 0; i < 10; i++){
                    <option key = {currencyOptions[i]} value = {currencyOptions[i]}>{currencyOptions[i]}</option>
                }
               
            </select>
        </div>
    )
}
