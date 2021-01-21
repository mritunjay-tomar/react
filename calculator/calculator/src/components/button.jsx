import './button.css'


const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
}

const Button = (props) => {

    const handleOnClick = () => {
        props.handleClick(props.children)
    }

    return(
        <>
            <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}` } onClick={handleOnClick}>
                {props.children}
            </div>
        </>
    );
}

export default Button;