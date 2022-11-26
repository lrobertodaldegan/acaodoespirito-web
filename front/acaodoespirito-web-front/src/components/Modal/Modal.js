import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './Modal.css'

const Modal = (props) => {
    if(props.show){
        return (
            <div className='moodal'>
                <div className='moodal-content'>
                    <div className='row'>
                        <div className='col-1 offset-11 moodal-close'>
                            <FontAwesomeIcon icon={faXmark} size='lg' onClick={props.closeAction}/>
                        </div>
                    </div>
                    {props.content ? props.content : <></>}
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

export default Modal;