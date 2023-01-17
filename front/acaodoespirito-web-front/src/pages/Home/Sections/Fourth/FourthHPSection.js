import Divider from '../../../../components/Divider/Divider'
import './FourthHPSection.css'

const FourthHPSection = () => {
    return (
        <div className="section row hp-content-section4">
            <Divider style={{color: 'rgb(50,50,50)'}}/>

            <div className="section1-title">
                SOBRE NÓS
            </div>

            <div className='about-links row graters'>
                <div className='col offset-1'>
                    <div className='about-links-item'>
                        <a href='/acao-em-acao'>Ação em Ação</a>
                    </div>
                    <div className='about-links-item'>
                        <a href='/conferencias'>Conferências</a>
                    </div>
                </div>
                <div className='col'>
                    <div className='about-links-item'>
                        <a href='/casa-acao'>Casa Ação</a>
                    </div>
                    <div className='about-links-item'>
                        <a href='/evangelismos'>Evangelismos</a>
                    </div>
                </div>
                <div className='col'>
                    <div className='about-links-item'>
                        <a href='/livros'>Livros</a>
                    </div>
                    <div className='about-links-item'>
                        <a href='/videos'>Vídeos</a>
                    </div>
                </div>
            </div>

            <div className='about-links row mobile'>
                <div className='col-6'>
                    <div className='about-links-item'>
                        <a href='/acao-em-acao'>Ação em Ação</a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about-links-item'>
                        <a href='/conferencias'>Conferências</a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about-links-item'>
                        <a href='/casa-acao'>Casa Ação</a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about-links-item'>
                        <a href='/evangelismos'>Evangelismos</a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about-links-item'>
                        <a href='/livros'>Livros</a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about-links-item'>
                        <a href='/videos'>Vídeos</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthHPSection;