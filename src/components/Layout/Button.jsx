const Button = ({onclick, text, style}) => {
    return(
        <button onClick={onclick} className={`button ${style}`}>
               {text}
        </button>
    )
}

export default Button