import React, { ChangeEvent, MouseEvent } from "react"

// Components
import AppWrapper from "../components/AppWrapper"
import Header from "../components/Header"
import CurrencyCardWrapper from "../components/CurrencyCardWrapper"
import ListCurreciesExchange from "../components/ListCurrencies"
import InputCurrency from "../components/InputCurrency"

import { CurrencyRate } from "../core/entities"


interface StatesType {
    initialExchangeValue: number,    
    currencyExchangeRates: Array<CurrencyRate>,    
    selectedCurrency: object
}

interface PropsType {}


export default class App extends React.PureComponent<PropsType, StatesType> {

    state = {
        initialExchangeValue: 5,
        currencyExchangeRates: [ new CurrencyRate("EUR", 0.32, 5) ],        
        selectedCurrency: {}
    }

    handleInitialExchangeValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            initialExchangeValue: Number(event.target.value)
        })
    }

    handleCurrencyRateOnRemove = (currencyRate: CurrencyRate) => (e: MouseEvent<HTMLElement>) => {
        console.log("currency Rate", currencyRate)
    }

    handleOnSubmit = (currencyRate: CurrencyRate) => {
        console.log("currency rate add !!")
    }

    render () {
        const { initialExchangeValue, currencyExchangeRates } = this.state
        return (
            <AppWrapper>
                <Header onChange={this.handleInitialExchangeValueOnChange} value={initialExchangeValue}/>
                <CurrencyCardWrapper>
                    <ListCurreciesExchange data={currencyExchangeRates} onRemove={this.handleCurrencyRateOnRemove} />
                </CurrencyCardWrapper>
                <InputCurrency onSubmit={this.handleOnSubmit} />
            </AppWrapper>
        )
    }
}