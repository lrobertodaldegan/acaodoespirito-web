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
                    <p><b>Ação House</b><br/>S. José dos Pinhais<br/>20hrs*</p>
                </div>
                <div className="col dia-semana">
                    <h5>TERÇA</h5>
                    <p><b>Ação House</b><br/>Boa Vista<br/>20hrs*</p>
                    <p><b>Ação House</b><br/>Colombo<br/>20hrs*</p>
                </div>
                <div className="col dia-semana">
                    QUARTA
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>Sala de oração</b><br/>19:30hrs*</p>
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
                    <p><b>Ação House</b><br/>S. José dos Pinhais<br/>20hrs*</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>TERÇA</h5>
                    <p><b>Ação House</b><br/>Boa Vista<br/>20hrs*</p>
                </div>
                <div className="col-6 dia-semana">
                    QUARTA
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>Sala de oração</b><br/>19:30hrs*</p>
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
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/-25.3751483,-49.1929618/R.+N.+Sra.+de+Nazar%C3%A9,+1662+-+Boa+Vista,+Curitiba+-+PR,+82560-000/@-25.3819565,-49.2527341,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94dce66222ea7c6b:0xba2fdf1b143a9573!2m2!1d-49.2422343!2d-25.3872336">
                    <FontAwesomeIcon icon={faMapLocationDot} 
                                    size='3x'
                                    className='section2-map-icon'/><br/>
                    Rua Nossa Senhora de Nazaré, 1662 - Boa Vista, Curitiba - PR
                </a>
            </div>
        </div>
    );
}

export default SecondHPSection;