import FirstHPSection from './Sections/First/FirstHPSection'
import SecondHPSection from './Sections/Second/SecondHPSection'
import ThirdHPSection from './Sections/Third/ThirdHPSection'
import FourthHPSection from './Sections/Fourth/FourthHPSection'
import Page from '../../components/Page/Page'

const HomePage = () => {
    return <Page content={
        <div className="hp-content">
            <FirstHPSection />
            <SecondHPSection />
            <ThirdHPSection />
            <FourthHPSection />
        </div>
    }/>
}

export default HomePage;