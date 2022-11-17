import CasaAcaoPage from "./CasaAcao/CasaAcaoPage";
import HomePage from "./Home/HomePage";

export const Pages = [
    {
        id: 0,
        path: '/',
        component: <HomePage />
    },
    {
        id: 1,
        path: '/casa-acao',
        component: <CasaAcaoPage />
    }
];