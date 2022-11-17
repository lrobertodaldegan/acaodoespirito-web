import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretUp
} from '@fortawesome/free-solid-svg-icons'
import './ToTopButton.css'

const ToTopButton = () => {
    
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        setVisible(document.documentElement.scrollTop > 300);
    }
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
  
    window.addEventListener('scroll', toggleVisible);

    return (
        <button className="to-top-button" 
                style={{display: visible ? 'inline' : 'none'}}
                onClick={() => scrollToTop()}>
            <FontAwesomeIcon icon={faCaretUp} size='4x'/>
        </button>
    );
}

export default ToTopButton;