

const MenuIcon = ({fill}) => {

    return (
        <svg width="30px" height={"30px"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={fill || "#00000"} stroke="none">
                <path d="M239 4037 c-92 -61 -90 -190 3 -247 33 -20 56 -20 2313 -20 2257 0 2280 0 2313 20 93 57 95 186 3 247 l-34 23 -2282 0 -2282 0 -34 -23z"></path>
                <path d="M250 2688 c-101 -52 -107 -191 -11 -250 l36 -23 2280 0 2280 0 36 23 c96 59 90 198 -11 250 l-44 22 -2261 0 -2261 0 -44 -22z"></path>
                <path d="M242 1330 c-93 -57 -95 -186 -3 -247 l34 -23 2282 0 2282 0 34 23 c92 61 90 190 -3 247 -33 20 -56 20 -2313 20 -2257 0 -2280 0 -2313 -20z"></path>
            </g>
        </svg>
    )
}

export default MenuIcon