import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import './Layout.scss';

const ServerSide = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    return <>{mounted ? children : null}</>;
}

export const Layout = ({ children }) => {
    return (
        <ServerSide>
            <div className='layout'>
                <Header/>
                    <main>{children}</main> 
                <Footer />
            </div>
        </ServerSide>
    )
}