const Button = ({onclick, text, style, type}) => {
    return(
        <button type={type} onClick={onclick} className={`button ${style}`}>
               {text}
        </button>
    )
}

export default Button