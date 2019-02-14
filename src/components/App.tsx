import React, { ChangeEvent, MouseEvent } from "react"

// Components
import AppWrapper from "../components/AppWrapper"
import Header from "../components/Header"
import CurrencyCardWrapper from "../components/CurrencyCardWrapper"
import ListCurreciesExchange from "../components/ListCurrencies"
import InputCurrency from "../components/InputCurrency"

// Entity
import { CurrencyRate } from "../core/entities"
import { CurrencyExchangeRatesType } from "./InputCurrency" 

// API
import { getForexRates } from "../core/services"

interface StatesType {
    initialExchangeValue: number,    
    currencyExchangeRates: Array<any>,    
    selectedCurrency: object,
    rates: Array<CurrencyExchangeRatesType>
}

interface PropsType {}


export default class App extends React.PureComponent<PropsType, StatesType> {

    state = {
        initialExchangeValue: 5,
        currencyExchangeRates: [],        
        selectedCurrency: {},
        rates: []
    }

    handleInitialExchangeValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            initialExchangeValue: Number(event.target.value)
        })
    }

    handleCurrencyRateOnRemove = (currency: string) => (e: MouseEvent<HTMLElement>) => {        
        let currentState = this.state.currencyExchangeRates
        let notMatchCurrency = currentState.filter((curr:CurrencyRate) => curr.currency !== currency)
        this.setState({
            currencyExchangeRates: notMatchCurrency
        })
    }

    handleOnSubmit = (currencyRate: any) => {        
        let { currency } = currencyRate
        let currentState = this.state.currencyExchangeRates
        let matchCurrency = currentState.filter((curr:CurrencyRate) => curr.currency === currency)
        if (matchCurrency.length === 0) {
            this.setState({
                currencyExchangeRates: [...this.state.currencyExchangeRates, ...[currencyRate]]
            })     
        }
    }

    fetchCurrencyExchangeRates = async () => {
        try {
            let resp = await getForexRates()
            let rawRates = resp.rates            
            let keys = Object.keys(rawRates)
            let rates = keys.map(key => {
                let value = rawRates[key]
                return {
                    label: key,
                    value
                }
            })
            this.setState({
                rates
            })
            
        } catch (e) {
            console.error(e)
        }
    }

    componentDidMount () {
        this.fetchCurrencyExchangeRates()
    }

    render () {
        const { initialExchangeValue, currencyExchangeRates, rates } = this.state
        return (
            <AppWrapper>
                <Header onChange={this.handleInitialExchangeValueOnChange} value={initialExchangeValue}/>
                <CurrencyCardWrapper>
                    <ListCurreciesExchange data={currencyExchangeRates} onRemove={this.handleCurrencyRateOnRemove} />
                </CurrencyCardWrapper>
                <InputCurrency onSubmit={this.handleOnSubmit} exchangeRates={rates} initialExchangeValue={initialExchangeValue}/>
            </AppWrapper>
        )
    }
}