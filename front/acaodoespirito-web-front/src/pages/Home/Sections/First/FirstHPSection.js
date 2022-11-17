import './FirstHPSection.css'

const FirstHPSection = () => {
    return (
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
    );
}

export default FirstHPSection;