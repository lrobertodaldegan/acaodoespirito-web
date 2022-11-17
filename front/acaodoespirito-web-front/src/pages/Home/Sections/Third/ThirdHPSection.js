import EventList from '../../../../components/EventList/EventList'
import './ThirdHPSection.css'

const ThirdHPSection = () => {
    return (
        <div className="section hp-content-section3">
            <hr/>

            <div className="section1-title">
                PRÓXIMOS EVENTOS
            </div>

            <EventList />

            <legend>Hey! Quer sabe mais? Entre em contato ou se inscreva na página de eventos!</legend>
        </div>
    );
}

export default ThirdHPSection;