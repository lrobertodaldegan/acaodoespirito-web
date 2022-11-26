import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import './EventList.css'
import { EventsMock } from '../../mocks/EventsMock';

const EventList = () => {

    const redirect = () => window.open('/inscreva-se', '_blank').focus();

    const itens = EventsMock.map((item) => {
        return (
            <div key={item.id} 
                    className="events-wrap row" 
                    onClick={() => redirect()}>

                <div className="events-date col">
                    <div className="events-day">
                        {item.day}
                    </div>
                    
                    <div className="events-mon">
                        {item.month}
                    </div>
                </div>
                <div className="events-desc col-10">
                    <p>{item.title}</p>
                    <legend>{item.desc}</legend>
                </div>
                <div className="events-icon col">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x"/>
                </div>
            </div> 
        );
    });

    return itens;
}

export default EventList;