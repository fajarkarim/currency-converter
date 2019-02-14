import React, { ChangeEvent, MouseEvent } from "react"

import { CurrencyRate } from "../core/entities"

export interface CurrencyExchangeRatesType {
    label: string,
    value: number
}


interface PropsType  {
    onSubmit: (currencyRate: CurrencyRate) => void,    
    exchangeRates: Array<CurrencyExchangeRatesType>,
    initialExchangeValue: number
}

interface StatesType {
    addNewCurrency: boolean,
    selectedCurrency: CurrencyExchangeRatesType
}

class InputCurrency extends React.PureComponent<PropsType, StatesType> {
    static defaultProps = {
        exchangeRates: []
    }

    state = {
        addNewCurrency: false,
        selectedCurrency: {
            label: "",
            value: 0
        }
    }

    handleOnClick = () =>  {
        this.setState({
            addNewCurrency: !this.state.addNewCurrency
        })
    }

    handleSelectOnChange = (e: ChangeEvent<HTMLSelectElement>) => {            
        let index = e.target.selectedIndex
        let label = e.target[index].innerText
        let value = Number(e.target.value)
        
        this.setState({
            selectedCurrency: {
                label, 
                value
            }
        })        
    }

    handleOnSubmit = () => {
        let { selectedCurrency: { label, value }} = this.state
        let { initialExchangeValue } = this.props
        let currencyRate = new CurrencyRate(label, value, initialExchangeValue )
        this.props.onSubmit(currencyRate)
    }

    render () {
        const { addNewCurrency } = this.state          
        const { exchangeRates } = this.props        

        return <div className="input">
        {
            addNewCurrency ? (
                <div className="input__submit">
                    <select className="input__submit_select" onChange={this.handleSelectOnChange}>
                        {
                            exchangeRates.map((rate, idx) => {
                                let {label, value} = rate
                                return <option key={idx} value={value}>{label}</option>
                            })
                        }                        
                    </select>

                    <button className="input__submit_button" onClick={this.handleOnSubmit}>Submit</button>              
                </div>
            ) : (
                <div className="input__add" onClick={this.handleOnClick}>
                    <span>(+)</span><span>Add More Currencies</span>
                </div>               
            )
        }
            
            
        </div>
    }
}

export default InputCurrency