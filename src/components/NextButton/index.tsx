import { Container, Title } from "./styles";
import icon from '../../assets/images/ArrowRight.png';

type props ={
    buttonText: string;
}

export default function NextButton({buttonText}:props) {
    return(
        <Container>
            <Title>
                {buttonText}
            </Title>
            <img src={icon}/>
        </Container>
    )
}