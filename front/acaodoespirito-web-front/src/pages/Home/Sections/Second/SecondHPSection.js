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
                    <p><b>Culto</b><br/>18:00</p>
                    <p><b>Casa Ação</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996170414&text=Oi'>Silvia e Juarildo</a><br/>21:00</p>
                </div>
                <div className="col dia-semana">
                    <h5>SEGUNDA</h5>
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>TERÇA</h5>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996170414&text=Oi'>Silvia e Juarildo</a><br/>Bairro Alto/Pinhais<br/>20:00</p>
                </div>
                <div className="col dia-semana">
                    <h5>QUARTA</h5>
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541995496790&text=Oi'>Flávia, Fran e Alex</a><br/>Sta.Cândida/Colombo<br/>19:00</p>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996051873&text=Oi'>Thiago e Giu</a><br/>Campina Gd. Sul/ Q. Barras<br/>20:00</p>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541998756825&text=Oi'>Jhon e Rayssa</a><br/>S.J. Pinhais<br/>20:00</p>
                </div>
                <div className="col dia-semana">
                    <h5>SEXTA</h5>
                    <p>Habitação - Sala de oração<br/>19:30</p>
                    <p>Escola OpenBook<br/>20:30 - 21:55</p>
                </div>
                <div className="col dia-semana">
                    <h5>SÁBADO</h5>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541991866879&text=Oi'>Eduardo e Lo</a><br/>Fazendinha<br/>19:30</p>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996504080&text=Oi'>Lucas e Andri</a><br/>Centro/Bom retiro<br/>20:00</p>
                </div>
            </div>

            <div className="row semana mobile">
                <div className="col-6 dia-semana">
                    <h5>DOMINGO</h5>
                    <p><b>Culto</b><br/>18:00</p>
                    <p><b>Casa Ação</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996170414&text=Oi'>Silvia e Juarildo</a><br/>21:00</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SEGUNDA</h5>
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>TERÇA</h5>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996170414&text=Oi'>Silvia e Juarildo</a><br/>Bairro Alto/Pinhais<br/>20:00</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>QUARTA</h5>
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541995496790&text=Oi'>Flávia, Fran e Alex</a><br/>Sta.Cândida/Colombo<br/>19:00</p>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996051873&text=Oi'>Thiago e Giu</a><br/>Campina Gd. Sul/ Q. Barras<br/>20:00</p>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541998756825&text=Oi'>Jhon e Rayssa</a><br/>S.J. Pinhais<br/>20:00</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SEXTA</h5>
                    <p>Habitação - Sala de oração<br/>19:30</p>
                    <p>Escola OpenBook<br/>20:30 - 21:55</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SÁBADO</h5>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541991866879&text=Oi'>Eduardo e Lo</a><br/>Fazendinha<br/>19:30</p>
                    <p><b>Ação House</b><br/><a href='https://api.whatsapp.com/send/?phone=5541996504080&text=Oi'>Lucas e Andri</a><br/>Centro/Bom retiro<br/>20:00</p>
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