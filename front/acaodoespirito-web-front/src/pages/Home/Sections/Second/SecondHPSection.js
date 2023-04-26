import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'
import './SecondHPSection.css'

const SecondHPSection = () => {
    return (
        <div className="section hp-content-section2">
            <div className="row">
                <div className="col section1-title">
                    VEM COM A GENTE!
                </div>
            </div>

            <div className="row semana graters">
                <div className="col dia-semana">
                    <h5>DOMINGO</h5>
                    <p><b>Culto</b><br/>18hrs</p>
                </div>
                <div className="col dia-semana">
                    <h5>SEGUNDA</h5>
                    <p><b>Ação House</b><br/>Boa Vista<br/>20hrs*</p>
                </div>
                <div className="col dia-semana">
                    <h5>TERÇA</h5>
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    QUARTA
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>HabitAção (Sala de oração)</b><br/>19:30hrs*</p><br/>
                    <p><b>Escola OpenBook</b><br/>20:30hrs*</p>
                </div>
                <div className="col dia-semana">
                    SEXTA
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>SÁBADO</h5>
                    <p><b>Ação House</b><br/>Jovens<br/>20:00hrs*</p>
                    <p><b>Ação House</b><br/>Meninos e Meninas<br/>16:00hrs*</p>
                </div>
            </div>

            <div className="row semana mobile">
                <div className="col-6 dia-semana">
                    <h5>DOMINGO</h5>
                    <p><b>Culto</b><br/>18hrs</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SEGUNDA</h5>
                    <p><b>Ação House</b><br/>Boa Vista<br/>20hrs*</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>TERÇA</h5>
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    QUARTA
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>HabitAção (Sala de oração)</b><br/>19:30hrs*</p><br/>
                    <p><b>Escola OpenBook</b><br/>20:30hrs*</p>
                </div>
                <div className="col-6 dia-semana">
                    SEXTA
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SÁBADO</h5>
                    <p><b>Ação House</b><br/>Jovens<br/>20:00hrs*</p>
                    <p><b>Ação House</b><br/>Meninos e Meninas<br/>16:00hrs*</p>
                </div>
            </div>
            
            <legend>*Hey! Quer sabe mais? Entre em contato!</legend>

            <div className="section2-map">
                <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/A6HWEaV9AVMx8QPm8">
                    <FontAwesomeIcon icon={faMapLocationDot} 
                                    size='3x'
                                    className='section2-map-icon'/><br/>
                    Rua Mateus Leme, 1133 - Bom Retiro, Curitiba - PR
                </a>
            </div>
        </div>
    );
}

export default SecondHPSection;