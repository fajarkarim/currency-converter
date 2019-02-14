import React, { ChangeEvent, MouseEvent } from "react"

import { CurrencyRate } from "../core/entities"

interface PropsType  {
    onSubmit: (currencyRate: CurrencyRate) => void,    
}

interface StatesType {
    addNewCurrency: boolean,
    selectedCurrency: string
}

class InputCurrency extends React.PureComponent<PropsType, StatesType> {
    state = {
        addNewCurrency: false,
        selectedCurrency: ""
    }

    handleOnClick = () =>  {
        this.setState({
            addNewCurrency: !this.state.addNewCurrency
        })
    }

    handleSelectOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedCurrency: e.target.value
        })        
    }

    handleOnSubmit = (e: MouseEvent<HTMLElement>) => {
        console.log("wkwkwk")
    }

    render () {
        const { addNewCurrency } = this.state             

        return <div className="input">
        {
            addNewCurrency ? (
                <div className="input__submit">
                    <select className="input__submit_select" onChange={this.handleSelectOnChange}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
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