import { Link } from "react-router-dom";
import SearchInput from "../../atoms/form/SearchInput";
import CartIcon from "../../atoms/Vectors/CartIcon";
import LoginIcon from "../../atoms/Vectors/LoginIcon";
import MenuIcon from "../../atoms/Vectors/MenuIcon";
import "./Header.css"


const Header = ({setShowNav}) => {

    return (

        <header className="header  py-3">
        <div className="container d-flex  flex-row align-items-center">
            <div className="d-flex d-lg-none align-items-center gap-3 mx-3">
                <div onClick={() => setShowNav(true)}>
                <MenuIcon fill="white" />

                </div>
                
            
                <i className="fa fa-search"></i>

            </div>
            <div style={{ width: "330px" }} className="d-none d-lg-block">
                <SearchInput placeholder="Search here" />

            </div>
            <div className="logo mx-sm-5">
                <Link to={""}>
                
                <img src="https://cdn.shopify.com/s/files/1/3028/7274/files/RedRickshaw_Mobile_ea75ffd0-4f26-4295-ac2f-c891612b632a_140x.png?v=1646393096" alt="logo" width="250px" height="40px" className="d-block d-md-none"/>

                    <img src="https://cdn.shopify.com/s/files/1/3028/7274/files/RedRickshaw_Desktop_250x@2x.png?v=1646395111" alt="logo" width="250px" height="40px"  className="d-none d-md-block"/>

                </Link>
            </div>
            <div className="headerIcons d-flex ml-auto gap-3">
                <Link to={""}>
                    <LoginIcon fill="white" />
                </Link>

                <div>
                    <Link to={""} >
                        <CartIcon fill="white" />
                        <div className="cartCount">
                            <span>1</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </header>
    )
}

export default Header;