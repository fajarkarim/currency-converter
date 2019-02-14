import React, { MouseEvent } from "react"

import { CurrencyRate } from "../core/entities"

interface PropsType {
    onRemove: (currency: string) => (e: MouseEvent<HTMLElement>) => void,
    currency: string,
    rate: number,
    exchangeRate: number
}

const defaultProps = {
    currency: "none",
    rate: 0,
    exchangeRate: 0
}

const CurrencyCard = (props: PropsType) => {
    const { exchangeRate, currency, rate, onRemove } = props    
    let currencyRate = new CurrencyRate(currency, exchangeRate, rate)    
    return (
        <div className="card">

            <div className="card__exchange_content">
                <div className="card__exchage_rate_total">
                    <span>{currency}</span>
                    <span>{currencyRate.toDollarRate}</span>
                </div>

                <div className="card__currency_description">
                    <span>{currency}</span>                
                </div>

                <div className="card__currency_rate">
                    <span>1 USD = {currency} {exchangeRate}</span>
                </div>
            </div>
            
            <div className="card__remove_button">
                <button onClick={onRemove(currency)}>-</button>
            </div>
            
        </div>
    )
}

CurrencyCard.defaultProps = defaultProps

export default CurrencyCard