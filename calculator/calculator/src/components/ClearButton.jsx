import "./ClearButton.css"

const Clear = (props) => {
    return(
        <>
        <div class="clear-btn" onClick={props.handleClear}>
            {props.children}
        </div>
        </>
    );
};


export default Clear;