import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBullhorn,
    faPlay,
    faBookOpen,
    faBook
} from '@fortawesome/free-solid-svg-icons'
import Divider from '../../../../components/Divider/Divider'
import './FourthHPSection.css'

const FourthHPSection = () => {
    return (
        <div className="section row hp-content-section4">
            <Divider style={{color: 'rgb(50,50,50)'}}/>

            <div className="section1-title">
                SOBRE NÓS
            </div>

            <div className="section4-about-wrap row">
                <div className="section4-about-item col">
                    <FontAwesomeIcon icon={faBook} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Livros</p>
                </div>
                <div className="section4-about-item col">
                    ICON
                    <p>Ação em Ação</p>
                </div>
                <div className="section4-about-item col">
                    ICON
                    <p>Conferências</p>
                </div>
            </div>
            <div className="section4-about-wrap row">
                <div className="section4-about-item col">
                    <FontAwesomeIcon icon={faBookOpen} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Escola Openbook</p>
                </div>
                <div className="section4-about-item col">
                    <FontAwesomeIcon icon={faBullhorn} 
                                    size='8x'
                                    className='section4-about-icon'/>
                    <p>Evangelismos</p>
                </div>
                <div className="section4-about-item col">
                    ICON
                    <p>Casa Ação</p>
                </div>
            </div>
            <div className="section4-about-wrap row">
                <div className="section4-about-item col-4">
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