import {  Container, IconContainer, Text } from "./styles"
import Linkedin from "../../assets/images/LinkedIn.svg"; 
import Instagram from "../../assets/images/Insta.svg"; 
import Telegram from "../../assets/images/Telegram.svg"; 
import LinkSimple from "../../assets/images/CaretRight.svg"; 

type ButtonProps = {
    icon?: string
    which: number
    title: string
}

export default function Button({which, icon, title}:ButtonProps){


    if(which === 1){ 
        icon = Linkedin
    }
    else if(which === 2){
        icon = Instagram
    }
    else if(which === 3){
        icon = Telegram
    }
    
    return(
            <Container>
                <IconContainer>
                    <img src={icon}  />
                    <Text>{title}</Text>
                </IconContainer>
                <img src={LinkSimple}  />

            </Container>
    )
}