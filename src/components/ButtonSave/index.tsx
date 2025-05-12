import { Container, Text } from "./styles";
import ArrowCircleDown from "../../assets/images/ArrowCircleDown.svg"; // Importa a imagem

export default function ButtonSave() {
    return(
        <Container>
            <img src={ArrowCircleDown} alt="Arrow Circle Down"/>
            <Text>Salvar Contato</Text>
        </Container>
    )
}