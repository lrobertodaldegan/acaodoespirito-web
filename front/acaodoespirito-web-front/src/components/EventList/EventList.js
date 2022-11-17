import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import './EventList.css'
import { redirect } from 'react-router-dom';
import { EventsMock } from '../../mocks/EventsMock';

const EventList = () => {

    const redirect = (url) => window.open(url, '_blank').focus();

    const itens = EventsMock.map((item) => {
        return (
            <div key={item.id} 
                    className="events-wrap" 
                    onClick={() => redirect(item.link)}>

                <div className="events-date">
                    <div className="events-day">
                        {item.day}
                    </div>
                    
                    <div className="events-mon">
                        {item.month}
                    </div>
                </div>
                <div className="events-desc">
                    <p>{item.title}</p>
                    <legend>{item.desc}</legend>
                </div>
                <div className="events-icon">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x"/>
                </div>
            </div> 
        );
    });

    return itens;
}

export default EventList;