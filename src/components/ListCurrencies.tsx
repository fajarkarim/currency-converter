import React, {MouseEvent} from "react"

import { CurrencyRate } from "../core/entities"

// Components
import CurrencyCard from "./CurrencyCard"

interface PropsType {
    onRemove: (currency: string) => (e: MouseEvent<HTMLElement>) => void,
    data: Array<CurrencyRate>
}

interface StatesType {

}

class ListCurrencies extends React.PureComponent<PropsType, StatesType> {
    static defaultProps = {
        data: []
    }

    render () {
        const { data, onRemove } = this.props
        return (
        <div>{
            data.map( (currencyRate:CurrencyRate, idx) => {        
                let { currency, initialValue, exchangeRate } = currencyRate
                return <CurrencyCard key={idx} onRemove={onRemove} currency={currency} rate={initialValue} exchangeRate={exchangeRate}/>
            })
        }</div>
        )
    }
}

export default ListCurrencies

