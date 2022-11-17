import Footer from "../Footer/Footer";
import MainMenu from "../MainMenu/MainMenu";

const Page = (props) => {

    const getContent = () => {
        let content = [];

        if(props.hideMainMenu !== true)
            content.push(<MainMenu/>);
        
        let wrap = <div className="content"></div>;

        if(props.content)
            wrap = <div className="content">{props.content}</div>;
        
        content.push(wrap);

        if(props.hideMainFooter !== true)
            content.push(<Footer />);

        return content;
    }

    return (
        <>
            {getContent().map(e => e)}
        </>
    );
}

export default Page;