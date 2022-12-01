import { useState } from 'react';
import LoginModal from '../../components/Modal/LoginModal/LoginModal';
import './EquipePage.css'

const EquipePage = () => {
    const [loginSuccess, setLoginSuccess] = useState(false);

    const checkLogin = (result) => {
        console.log(result);
        
        if(result.success === true)
            setLoginSuccess(true);
    }

    let content = <LoginModal callbackAction={checkLogin}/>

    if(loginSuccess)
        content = <>OK</>

    return content;
}

export default EquipePage;