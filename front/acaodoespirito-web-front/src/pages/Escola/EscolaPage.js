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

                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&bgcolor=%23ffffff&showTitle=0&src=YWNhb2RvZXNwaXJpdG9pYWVAZ21haWwuY29t&src=Y2xhc3Nyb29tMTEwNzAzMzA0MDUwMTcwMzI3ODgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5&color=%230B8043" width="800" height="600"/>
            </div>
        </div>
    );
}

export default EscolaPage;