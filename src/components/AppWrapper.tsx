import  React, { ReactNode } from "react"

interface PropsType {
    children: ReactNode
}

const AppWrapper = (props: PropsType) => {
    const { children } = props
    return (
        <div className="container">{children}</div>
    )
}

export default AppWrapper
