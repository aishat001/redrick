import { useState } from "react"
import Aside from "../../molecules/Aside"
import Footer from "../../molecules/Footer"
import Header from "../../molecules/Header"
import Nav from "../../molecules/Nav/Nav"
import "./Layout.css"

const Layout = ({ children }) => {
    const [showNav, setShowNav] = useState(false)


    return (
        <div className="layoutWrapper">
            <Header setShowNav={setShowNav} />
            <Nav />
            <Aside setShowNav={setShowNav} showNav={showNav}/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout