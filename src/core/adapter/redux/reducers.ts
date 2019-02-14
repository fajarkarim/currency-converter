import { combineReducers } from "redux"

import { CurrencyRate } from "../../entities/CurrencyRate"
import {
    ADD_CURRENCY_EXCHANGE_RATE ,
    REMOVE_CURRENCY_EXCHANGE_RATE,
    SET_CURRENCIES_RATE,
    SET_BASE_CURRENCY_VALUE
} from "./constants"

export interface CurrencyExchangeRatesType {
    [key: string]: string
}


export interface CurrencyExchangeValuesActionType {
    type: string,
    currencyExchangeValues: Array<CurrencyRate>
}

export interface CurrencyRatesActionType {
    type: string,
    currencyRates: Array<CurrencyExchangeRatesType>
}

export interface BaseCurrencyValueType {
    type: string,
    baseCurrencyValue: number
}

let initialState = {
    baseCurrencyValue: 5,
    currencyRates: [],
    currencyExchangeValues: []
}

interface StateType {
    baseCurrencyValue: number,
    currencyRates:Array<CurrencyExchangeRatesType>,
    currencyExchangeValues: Array<CurrencyRate>
}

const currencyExchangeValuesReducer = (state: StateType = initialState, action: CurrencyExchangeValuesActionType): StateType => {
    switch(action.type) {
        case ADD_CURRENCY_EXCHANGE_RATE:     
            return { ...state, currencyExchangeValues: action.currencyExchangeValues }       
        case REMOVE_CURRENCY_EXCHANGE_RATE:
            return { ...state, currencyExchangeValues: action.currencyExchangeValues }        
        default:
            return state
    }
}

const currencyRatesReducer = (state: StateType = initialState, action: CurrencyRatesActionType): StateType => {
    switch (action.type) {
        case SET_CURRENCIES_RATE:
            return { ...state, currencyRates: action.currencyRates }
        default: 
            return state
    }
}

const baseCurrencyValueReducer = (state: StateType = initialState, action: BaseCurrencyValueType ): StateType => {
    switch (action.type) {
        case SET_BASE_CURRENCY_VALUE:
            return {...state, baseCurrencyValue: action.baseCurrencyValue}
        default:
            return state;
    }
}


const rootReducers = combineReducers({
    baseCurrencyValue: baseCurrencyValueReducer,
    currencyExchangeValues: currencyExchangeValuesReducer,
    currencyRates: currencyRatesReducer
})

export default rootReducers