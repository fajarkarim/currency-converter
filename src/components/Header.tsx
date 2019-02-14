import React, {ChangeEvent} from "react"

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
                        isEdit ? (<input type="number" onChange={onChange} value={value} />) 
                            : (<div className="header__currency">
                                    <span>USD</span>
                                    <span>{value}</span>
                                </div>)
                    }
                    
                </div>
            </header>
        )
    }
}

export default Header