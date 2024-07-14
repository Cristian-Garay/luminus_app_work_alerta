import { WelcomeScreen } from "../components/screens/main/WelcomeScreen";
import { SuggestionScreen } from "../components/screens/main/SuggestionScreen";
import { NewsScreen } from "../components/screens/main/NewsScreen";

export const Screens = [
    { name: 'Welcome', component: WelcomeScreen, label: 'Welcome' },
    { name: 'Suggestion', component: SuggestionScreen, label: 'Suggestion' },
    { name: 'News', component: NewsScreen, label: 'News' }
];


export const Colors = {
    primary: "#00ABE0",
    secondary: "#3C4C6E",
    blue: "#3C4C6E",
    purple: "#9A76A6",
    red: "#EB557A"
}