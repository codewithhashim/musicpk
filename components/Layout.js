import React from "react";
import style from "../styles/layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <h3>
                    Pakistan Music Streaming website
                </h3>
            </div>
            {children}
            <div className={style.footer}>
                <h3>
                    Listen Pakistani Music 🇵🇰
                </h3>
            </div>
        </div>
    )
}

export default Layout