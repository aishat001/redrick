import { Link } from "react-router-dom";
import CaretDownIcon from "../../atoms/Vectors/CaretDownIcon";
import CaretRightIcon from "../../atoms/Vectors/CaretRightIcon";
import { MenuLink } from "../../templates/layout/MenuLinks";
import "./Nav.css"

const Nav = () => {

    return (
        <nav className="container px-0 d-none d-lg-block">
            <ul className="d-flex justify-content-between px-0 m-0">
            <li className="d-flex align-items-center">
                    <Link to={"/collections/mangoes"}>Mangoes</Link>
                </li>
                {
                    MenuLink.map(({ name: menu, link, submenu }, index) => (
                        <div>
                            <li key={index} className="py-3"
                            >
                                <div className="d-flex gap-1">
                                    <Link to={link}>{menu}</Link>
                                    <div style={{ width: "10px", height: "16px" }}>
                                        <CaretDownIcon />
                                    </div>
                                </div>


                                <div className="dropDownContent" >
                                    <ul>
                                        {submenu.map((item, index) => (
                                            <li key={index}>
                                                <Link to={item.link}>
                                                    {item.name}
                                                </Link>
                                            </li>

                                        ))}

                                        <li className="bottom-link"><Link to={link} className="pt-5 upperCase">Shop All {" "} {menu}</Link> <CaretRightIcon/></li>
                                    </ul>
                                </div>
                            </li>

                        </div>
                    ))
                }
                                <li className="d-flex align-items-center">
                    <Link to={"/collections/sale"}>Special offers</Link>
                </li>
            </ul>

        </nav>
    )
}
export default Nav;