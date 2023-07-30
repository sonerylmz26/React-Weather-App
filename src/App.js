// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import CityContextProvider from "./context/CityContext";
import AppRouter from "./router/AppRouter";
import { useThemeContext } from "./context/ThemeContext";
import { darktheme, lightTheme } from "./styles/theme";

function App() {

const {myTheme} = useThemeContext();

const themes = myTheme ==="light" ? lightTheme : darktheme ;

    return (

        <ThemeProvider theme={themes}>
            <AuthContextProvider>
                <CityContextProvider>
                    <AppRouter />
                </CityContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
