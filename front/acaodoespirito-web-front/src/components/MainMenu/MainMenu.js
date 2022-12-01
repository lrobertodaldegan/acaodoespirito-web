import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import SocialIcons from '../SocialIcons/SocialIcons'
import MainButton from '../MainButton/MainButton.js';
import logo from '../../assets/img/logo.png'
import './MainMenu.css';

const MainMenu = () => {
    const [showOptions, setShowOptions] = useState(false);

    const showHideOptions = () => setShowOptions(!showOptions);

    let modalOptions = <></>;
    
    if(showOptions) {
        modalOptions = (
            <div className="menu-options-parent">
                <button className='close-menu-button' onClick={() => showHideOptions()}>
                    <FontAwesomeIcon icon={faXmark} 
                                        size='2x'
                                        className='menu-button-icon'/>
                </button>

                <a href="/">
                    <img src={logo} alt="Ação do Espírito" className="main-menu-logo"/>
                </a>
                
                <div className="menu-options">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li>
                            QUEM SOMOS
                            <ul>
                                <li><a href="/nossa-historia">NOSSA HISTÓRIA</a></li>
                                <li><a href="/acao-em-acao">AÇÃO EM AÇÃO</a></li>
                                <li><a href="/conferencias">CONFERÊNCIAS</a></li>
                                <li><a href="/evangelismos">EVANGELISMOS</a></li>
                                <li><a href="/casa-acao">CASA AÇÃO</a></li>
                                <li><a href="/videos">VÍDEOS</a></li>
                            </ul>
                        </li>
                        <li><a href="/livros">LIVROS</a></li>
                        <li><a href="/inscreva-se">PRÓXIMOS EVENTOS</a></li>
                        <li><a href="/quero-fazer-parte">QUERO FAZER PARTE</a></li>
                        <li><a href="/blank">?</a></li>
                    </ul>
                    
                    <SocialIcons size="xl"/>
                </div>
            </div>
        );
    }

    return (
        <div className="main-menu" id="main-menu">

            {modalOptions}

            <div className="menu-actions align-left">
                <button className='menu-button' onClick={() => showHideOptions()}>
                    <FontAwesomeIcon icon={faBars} 
                                        size='xl'
                                        className='menu-button-icon'/>
                </button>
            </div>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Ação do Espírito" 
                        className="main-menu-logo"
                        id="main-menu-logo"
                    />
                </a>
            </div>
            <div className="other-actions align-right">
                <MainButton label='Quero fazer parte! ❤️' 
                    action={() => window.open('/quero-fazer-parte', '_self').focus()}/>
            </div>
        </div>
    );
}

export default MainMenu;