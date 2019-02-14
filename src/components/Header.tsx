import React, {ChangeEvent, KeyboardEvent} from "react"

interface PropsType {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    value: number
}

interface StatesType {
    isEdit: boolean
} 


class Header extends React.PureComponent<PropsType, StatesType> {
    static defaultProps = {
        value: 5
    }

    state = {
        isEdit: false
    }

    handleOnClick = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    handleOnKeyUp = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter") {
            this.setState({
                isEdit: !this.state.isEdit
            })
        }
    }

    render () {
        const { isEdit } = this.state
        const { onChange, value } = this.props
        return (
            <header id="header">
                <div className="header__currency_desc">
                    <span>USD - United States Dollar</span>
                </div>
                <div>                    
                    {
                        isEdit ? (<input type="number" onChange={onChange} onKeyUp={this.handleOnKeyUp} value={value} />) 
                            : (<div className="header__currency">
                                    <span>USD</span>
                                    <span onClick={this.handleOnClick}>{value}</span>
                                </div>)
                    }
                    
                </div>
            </header>
        )
    }
}

export default Header