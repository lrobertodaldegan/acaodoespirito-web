import React from 'react';
import pdfSobre from '../../assets/others/escola_sobre.pdf';
import './EscolaPage.css';

const EscolaPage = () => {
    return (
        <div className='livros-content'>
            <div className='section'>
                <div className='row livros-premsg'>
                    <div className='col'>
                        <p>
                            Consulte abaixo mais detalhes sobre a nossa escola!
                            <br/>
                            Se você já é aluno, acesse o conteúdo 
                            <a href="https://openbook.acaodoespirito.com.br"> clicando aqui</a>.
                        </p>
                    </div>
                </div>

                <iframe src={pdfSobre} width='100%' height='500px' type="application/pdf"/>
            </div>
        </div>
    );
}

export default EscolaPage;