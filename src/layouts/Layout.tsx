import React, { FC } from 'react'

import Footer from './footer/Footer'
import Header from './header/Header'
import { RootStateOrAny, useSelector } from 'react-redux'
interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const { is_loggedin } = useSelector((state: RootStateOrAny) => state.login)
    return (
        <div className="">
            <Header />
            <div className="" {...props}>{children}</div>
            <Footer />
        </div>
    )
};

export default Layout;