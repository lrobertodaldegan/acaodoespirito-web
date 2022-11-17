import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/logo.png'
import './MenuButton.css'
import SocialIcons from '../SocialIcons/SocialIcons'

const MenuButton = () => {
    const [showOptions, setShowOptions] = useState(false);

    const showHideOptions = () => setShowOptions(!showOptions)

    let component = (
        <button className='menu-button' onClick={() => showHideOptions()}>
            <FontAwesomeIcon icon={faBars} 
                                size='xl'
                                className='menu-button-icon'/>
        </button>
    );

    if(showOptions) {
        component = (
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
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            QUEM SOMOS
                            <ul>
                                <li><a href="/">AÇÃO EM AÇÃO</a></li>
                                <li><a href="/">CONFERÊNCIAS</a></li>
                                <li><a href="/">ESCOLA OPENBOOK</a></li>
                                <li><a href="/">EVANGELISMOS</a></li>
                                <li><a href="/">PROJETO SOCIAL</a></li>
                                <li><a href="/">VÍDEOS</a></li>
                            </ul>
                        </li>
                        <li><a href="/">LIVROS</a></li>
                        <li><a href="/">AÇÃO INDICA</a></li>
                        <li><a href="/">PREGAÇÕES</a></li>
                        <li><a href="/">PRÓXIMOS EVENTOS</a></li>
                        <li><a href="/">DESEJO FAZER PARTE</a></li>
                        <li><a href="/">CONTATO</a></li>
                        <li><a href="/">?</a></li>
                    </ul>
                    <div className="menu-options-social">
                        <SocialIcons size="xl"/>
                    </div>
                </div>
            </div>
        );
    }

    return component;
}

export default MenuButton;