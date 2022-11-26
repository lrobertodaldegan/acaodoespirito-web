import './SecondaryButton.css'

const SecondaryButton = (props) => {
    let customStyle = props.style ? props.style : {};

    let btn = (
        <button className='sec-button' style={customStyle}>
            {props.label}
        </button>
    );

    if(props.action){
        btn = (
            <button className='sec-button' style={customStyle} onClick={props.action}>
                {props.label}
            </button>
        );
    }

    return btn;
}

export default SecondaryButton;