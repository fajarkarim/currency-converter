import React from "react"

import { CurrencyRate } from "../core/entities"

// Components
import CurrencyCard from "./CurrencyCard"

interface PropsType {
    onRemove: (currencyRate: CurrencyRate) => void,
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
            data.map( (currency, idx) => {                        
                return <CurrencyCard key={idx} onRemove={onRemove} currency={"IDR"} rate={5} exchangeRate={14000}/>
            })
        }</div>
        )
    }
}

export default ListCurrencies

