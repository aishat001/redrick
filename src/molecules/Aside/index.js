import { useState } from "react"
import { Link } from "react-router-dom"
import CancelIcon from "../../atoms/Vectors/CancelIcon"
import CaretLeftIcon from "../../atoms/Vectors/CaretLeftIcon"
import CaretRightIcon from "../../atoms/Vectors/CaretRightIcon"
import Logo from "../../atoms/Vectors/Logo"
import { MenuLink } from "../../templates/layout/MenuLinks"
import "./Aside.css"

const Aside =({setShowNav, showNav}) => {
    const [showSubmenu, setShowSubmenu] = useState()
    const [toggle, setToggle] = useState(null)  
    const clickHandler = (menuId) => {
        console.log(`clicked`)  
        setToggle(menuId)
        setShowSubmenu(!showSubmenu)
      }

    return (
        showNav === true && (

            <aside className="sidebar d-lg-none">
                <div className="cancelIcon" onClick={() =>
                        setShowNav(false)

                    } >
                    <CancelIcon />
                </div>
                <div>
                    <nav className="container px-0 border-bottom">
                        <ul className="d-flex flex-column justify-content-between px-0 m-0">
                            <li className="d-flex align-items-center">
                                <Link to={""}>Mangoes</Link>
                            </li>
                            {
                                MenuLink.map(( {name : menu, link, submenu, id}) => (
                                    <div>

                                        <li key={id}
                                            className=""
                                            onClick={() => clickHandler(id)}
                                        >
                                            <div className="d-flex justify-content-between gap-1">
                                                <span>{menu}</span>
                                                <div style={{ width: "10px", height: "16px" }}>
                                                    <CaretRightIcon />
                                                </div>
                                            </div>



                                        </li>

                                        {showSubmenu && toggle === id ? (
                                            <div className="sidebar-submenu " >
                                                <div className="gap-3 cancelIcon"
                                                    onClick={() => {
                                                        setShowSubmenu(false)
                                                        setShowNav(true)
                                                    }}
                                                >
                                                    <CaretLeftIcon
                                                    />
                                                    {menu}
                                                </div>
                                                <ul>
                                                    {submenu.map((item, index) => (
                                                        <li key={index}>
                                                            <Link to={item.link}>
                                                            {item.name}
                                                            </Link></li>

                                                    ))}
                                                </ul>
                                                <div className="uppercase submenu-bottom-link d-flex gap-5 ">
                                                    <Link to={link} >Shop All {" "} {menu} </Link>
                                                    <CaretRightIcon/>
                                                </div>
                                            </div>
                                        ) : null
                                        }
                                    </div>
                                ))
                            }
                            <li className="d-flex align-items-center">
                                <Link to={""}>Special offers</Link>
                            </li>
                        </ul>

                    </nav>

                </div>
                <div className="login">
                    <Link to={""}>Log in</Link>
                </div>
                <div className="bottom-logo">
                    <Link to={""}>
                        <Logo fill="#e44f55"/>
                    </Link>
                </div>
            </aside>
        )
        
    )
}

export default Aside;