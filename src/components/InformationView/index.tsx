import ButtonSave from "../ButtonSave";
import Icons from "../InformationIcons";
import ThemeButton from "../ThemeButton";

import { ChangeMode, Container, IconContainer, JobPosition, TextContainer, Name, NameAndJobView } from "./styles";

type Props ={
    title: string
    jobPosition: string
}

export default function InformationView({title, jobPosition}:Props) {

    return(
        <Container>
            
            <TextContainer>
                
                <NameAndJobView>
                    <Name>{title}</Name>
                    <JobPosition>{jobPosition}</JobPosition>
                </NameAndJobView>

                <ChangeMode>
                    <ThemeButton/>
                </ChangeMode>
                
            </TextContainer>

            <IconContainer>
                <Icons
                    which={1}
                />
                <Icons
                    which={2}
                />
                <Icons
                    which={3}
                />
                
            </IconContainer>
                <ButtonSave/>
            
        </Container>
    )
}