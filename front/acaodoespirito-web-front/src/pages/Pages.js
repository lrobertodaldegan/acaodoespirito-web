import Page from "../components/Page/Page";
import CasaAcaoPage from "./CasaAcao/CasaAcaoPage";
import Conferencias from "./Conferencias/Conferencias";
import EquipePage from "./Equipe/EquipePage";
import HomePage from "./Home/HomePage";

export const Pages = [
    {
        id: 0,
        path: '/',
        menuName: 'Home',
        component: <Page content={<HomePage />}/>
    },
    {
        id: 1,
        path: '/casa-acao',
        menuName: 'Casa Ação',
        component: <Page content={<CasaAcaoPage />} hideMainFooter={true}/>
    },
    {
        id: 10,
        path: '/equipe',
        menuName: 'Equipe',
        hideOnMenu: true,
        component: <Page content={<EquipePage />}/>
    },
    {
        id: 2,
        path: '/conferencias',
        menuName: 'Conferências',
        component: <Page content={<Conferencias />}/>
    }
];