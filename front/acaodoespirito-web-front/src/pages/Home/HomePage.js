import './HomePage.css'

const HomePage = () => {
    return(
        <div className="hp-content">
            <div className="section hp-content-section1">
                <div className="section1-title">
                    <i>"Não se embriaguem com vinho,
                     que leva à libertinagem, mas deixem-se encher pelo Espírito."
                     <br/> Efésios 5:18</i>
                </div>
                <hr/>
                <div className="section1-mvv">
                    <div className="section1-mvv-child">
                        <h4>MISSÃO</h4>
                        <p>Ser uma <b>igreja</b> fortalecida pelo 
                            <b>Espírito Santo</b>, 
                            através da adoração, ensinamento das escrituras, 
                            oração e dons. 
                            <b>Amar o próximo e cumprir o "ide"</b>.</p>
                    </div>
                    <div className="section1-mvv-child">
                        <h4>VISÃO</h4>
                        <p><b>Efésios 5:18</b> nos diz para sermos cheios do 
                        <b> Espírito Santo</b>.</p>
                    </div>
                    <div className="section1-mvv-child">
                        <h4>VALORES</h4>
                        <p>Crer nos princípios da <b>escritura</b> como 
                            <b>única e verdadeira</b>.</p>
                    </div>
                </div>
            </div>

            <div className="section hp-content-section2">
                <div className="section1-title">
                    VEM COM A GENTE!
                </div>

                <div clasName="section2-map">
                    <a href="https://www.google.com/maps/dir/-25.3751483,-49.1929618/R.+N.+Sra.+de+Nazar%C3%A9,+1662+-+Boa+Vista,+Curitiba+-+PR,+82560-000/@-25.3819565,-49.2527341,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94dce66222ea7c6b:0xba2fdf1b143a9573!2m2!1d-49.2422343!2d-25.3872336">
                        Rua. Nossa Senhora de Nazaré, 1662 - Boa Vista, Curitiba - PR
                    </a>
                </div>

                <h3>Nossa semana:</h3>
                <table className="section2-tbl">
                    <thead>
                        <th>DOMINGO</th>
                        <th>SEGUNDA</th>
                        <th>TERÇA</th>
                        <th>QUARTA</th>
                        <th>QUINTA</th>
                        <th>SEXTA</th>
                        <th>SÁBADO</th>
                    </thead>
                    <tbody>
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
                <legend>*Entre em contato para maiores informações</legend>
            </div>

            <div className="hp-content-section3">
                
            </div>

            <div className="hp-content-section4">
                
            </div>

            <div className="hp-content-section5">
                
            </div>

            <div className="hp-content-section6">
                
            </div>

            <div className="hp-content-section7">
                
            </div>
        </div>
    );
}

export default HomePage;