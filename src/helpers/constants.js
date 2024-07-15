import { WelcomeScreen } from "../components/screens/main/WelcomeScreen";
import { SuggestionScreen } from "../components/screens/main/SuggestionScreen";
import { NewsScreen } from "../components/screens/main/NewsScreen";

export const Screens = [
    { name: 'Welcome', component: WelcomeScreen, label: 'Inicio', icon: "house" },
    // { name: 'News', component: NewsScreen, label: 'Novedades', icon: "bullhorn" },
    { name: 'Suggestion', component: SuggestionScreen, label: 'Sugerencia', icon: "comment-dots" },
];


export const Colors = {
    primary: "#00ABE0",
    secondary: "#3C4C6E",
    blue: "#3C4C6E",
    purple: "#9A76A6",
    red: "#EB557A"
}