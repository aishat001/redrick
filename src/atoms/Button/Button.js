import "./Button.css"

const Button = ({title, bgColor, color, bRadius, pl, pr, border}) => {

    return (
        <button
        style={{backgroundColor: bgColor, color: color, borderRadius: bRadius, paddingLeft:pl, paddingRight:pr, border: border, }} 
        >
            {title}
        </button>
    )
}

export default Button;