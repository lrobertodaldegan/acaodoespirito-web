import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'
import './SecondHPSection.css'

const SecondHPSection = () => {
    return (
        <div className="section hp-content-section2">
            <div className="section1-title">
                VEM COM A GENTE!
            </div>

            <table className="section2-tbl">
                <tbody>
                    <tr>
                    <th>DOMINGO</th>
                    <th>SEGUNDA</th>
                    <th>TERÇA</th>
                    <th>QUARTA</th>
                    <th>QUINTA</th>
                    <th>SEXTA</th>
                    <th>SÁBADO</th>
                </tr>
                    <tr>
                        <td><b>Culto</b><br/>18hrs</td>
                        <td><b>Ação House</b><br/>São José dos Pinhais<br/>20hrs*</td>
                        <td><b>Ação House</b><br/>Boa Vista e Colombo<br/>20hrs*</td>
                        <td>-</td>
                        <td>
                            <b>Sala de Oração</b><br/>19:30hrs
                        </td>
                        <td><b>Ação House</b><br/>Jovens<br/>20hrs*</td>
                        <td><b>Ação House</b><br/>Meninos e Meninas<br/>20hrs*</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <b>Escola Openbook</b><br/>20:30hrs*
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
            </table>
            <table className="section2-tbl-mobile">
                <tbody>
                    <tr>
                        <th>DOMINGO</th>
                        <td><b>Culto</b><br/>18hrs</td>
                    </tr>
                    <tr>
                        <th>SEGUNDA</th>
                        <td><b>Ação House</b><br/>São José dos Pinhais<br/>20hrs*</td>
                    </tr>
                    <tr>
                        <th>TERÇA</th>
                        <td><b>Ação House</b><br/>Boa Vista e Colombo<br/>20hrs*</td>
                    </tr>
                    <tr>
                        <th>QUARTA</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>QUINTA</th>
                        <td>
                            <b>Sala de Oração</b><br/>19:30hrs<br/><br/>
                            <b>Escola Openbook</b><br/>20:30hrs*
                        </td>
                    </tr>
                    <tr>
                        <th>SEXTA</th>
                        <td><b>Ação House</b><br/>Jovens<br/>20hrs*</td>
                    </tr>
                    <tr>
                        <th>SÁBADO</th>
                        <td><b>Ação House</b><br/>Meninos e Meninas<br/>20hrs*</td>
                    </tr>
                </tbody>
            </table>
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