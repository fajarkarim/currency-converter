import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import {
    ADD_CURRENCY_EXCHANGE_RATE ,
    REMOVE_CURRENCY_EXCHANGE_RATE,
    SET_CURRENCIES_RATE,
    SET_BASE_CURRENCY_VALUE
} from "./constants"

import { CurrencyRate } from "../../entities" 
import { CurrencyExchangeValuesActionType, CurrencyRatesActionType, BaseCurrencyValueType } from "./reducers"

export const addCurrencyExchangeRate = (CurrencyRate: CurrencyRate): CurrencyExchangeValuesActionType => {

    return {
        type: ADD_CURRENCY_EXCHANGE_RATE,
        currencyExchangeValues: []
    }
}

export const removeCurrencyExchangeRate = (CurrencyRate: CurrencyRate) => {

}

export const setCurrenciesRate = () => {
    
}

export const setBaseCurrencyValue = (value: number) => {

}

export const fetchCurrenciesRate = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            
        } catch (e) {

        }
    }
}