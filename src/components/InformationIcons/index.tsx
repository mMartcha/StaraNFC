import { Container } from "./styles";
import EnvelopeSimple from "../../assets/images/EnvelopeSimple.svg"; 
import WhatsappLogo from "../../assets/images/WhatsappLogo.svg"; 
import LinkSimple2 from "../../assets/images/LinkSimple.svg"; 

type IconsProps = {
    icon?: string;
    which: number
}

export default function Icons({icon, which}:IconsProps) {

    if(which === 1){
        icon = EnvelopeSimple
    }
    else if(which === 2){
        icon = WhatsappLogo
    }
    else if(which === 3){
        icon = LinkSimple2
    }


    return(
        <Container>
            <img src={icon} />
        </Container>
    )
}