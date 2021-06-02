import React from 'react'

//using props to pass data from App.js to the file
export default function CurrencyRow(props) {

    const {currencyOptions} = props
    console.log(props)
    console.log(props[0]) //bug-->undifined

    return (
        <div>
            <input type = "number" className = "input" />
            <select name = "currencyOptions" id = "currencyOptions">

                {/* for (var i = 0; i = 10; i++){
                    <option value = {props[i]}>{props[i]}</option>
                } */}
                <option value = "Currency">Currency</option>
               
            </select>
        </div>
    )
}
