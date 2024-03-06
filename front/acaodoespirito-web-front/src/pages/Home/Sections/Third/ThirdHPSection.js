import EventList from '../../../../components/EventList/EventList'
import Divider from '../../../../components/Divider/Divider'
import './ThirdHPSection.css'

const ThirdHPSection = () => {
    return (
        <div className="section row hp-content-section3">
            <Divider style={{color: 'rgb(50,50,50)'}}/>

            <div className="section1-title">
                PRÓXIMOS EVENTOS
            </div>

            {/* <EventList /> */}
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&bgcolor=%23ffffff&showTitle=0&src=YWNhb2RvZXNwaXJpdG9pYWVAZ21haWwuY29t&src=Y2xhc3Nyb29tMTEwNzAzMzA0MDUwMTcwMzI3ODgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5&color=%230B8043" width="800" height="600"/>

            <legend>Hey! Quer sabe mais? Entre em contato!</legend>
        </div>
    );
}

export default ThirdHPSection;