import { useContext } from "react";
import { Container } from "./styles";
import { MapContext } from "../../context/ThemeContext";
import Sun from "../../assets/images/Sun.svg"
import Moon from "../../assets/images/Moon.svg"


export default function ThemeButton() {

    const { darkMode, setDarkMode } = useContext(MapContext);

    return(
        
        <Container onClick={() => setDarkMode(!darkMode)}>
            <img
                src={darkMode === true ? Sun : Moon}
            />
        </Container>
    )
}