import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBullhorn,
    faPlay,
    faBookOpen,
    faBook
} from '@fortawesome/free-solid-svg-icons'
import './FourthHPSection.css'

const FourthHPSection = () => {
    return (
        <div className="section hp-content-section4">
            <hr/>

            <div className="section1-title">
                SOBRE NÓS
            </div>

            <div className="section4-about-wrap">
                <div className="section4-about-item">
                    <FontAwesomeIcon icon={faBook} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Livros</p>
                </div>
                <div className="section4-about-item">
                    ICON
                    <p>Ação em Ação</p>
                </div>
                <div className="section4-about-item">
                    ICON
                    <p>Conferências</p>
                </div>
            </div>
            <div className="section4-about-wrap">
                <div className="section4-about-item">
                    <FontAwesomeIcon icon={faBookOpen} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Escola Openbook</p>
                </div>
                <div className="section4-about-item">
                    <FontAwesomeIcon icon={faBullhorn} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Evangelismos</p>
                </div>
                <div className="section4-about-item">
                    ICON
                    <p>Casa Ação</p>
                </div>
            </div>
            <div className="section4-about-wrap">
                <div className="section4-about-item">
                    <FontAwesomeIcon icon={faPlay} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Vídeos</p>
                </div>
            </div>
        </div>
    );
}

export default FourthHPSection;