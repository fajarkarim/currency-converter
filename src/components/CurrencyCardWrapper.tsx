import React, { ReactNode } from "react"

interface PropTypes {
    children: ReactNode
}

const CurrencyCardWrapper = (props: PropTypes) => {
    const { children } = props
    return <div className="wrapper__currencys">{children}</div>
}

export default CurrencyCardWrapper