import MainButton from '../MainButton/MainButton.js';
import MenuButton from '../MenuButton/MenuButton.js';
import logo from '../../assets/img/logo.png'
import './MainMenu.css';

const MainMenu = () => {
    return (
        <div className="main-menu" id="main-menu">
            <div className="menu-actions align-left">
                <MenuButton />
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
                <MainButton label='Quero fazer parte! ❤️' action={() => console.log('Clicou!')}/>
            </div>
        </div>
    );
}

export default MainMenu;