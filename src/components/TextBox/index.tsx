import NextButton from "../NextButton";
import { ButtonView, Container, Description, DescriptionView, Title, TitleView, WritingView } from "./styles";

type props ={
    title: string;
    description: string;
    buttonText: string;
}

export default function TextBox({title,description, buttonText}:props) {
    return(
        <Container>
            <WritingView>
                <TitleView>
                    <Title>
                        {title}
                    </Title>
                </TitleView>

                <DescriptionView>
                    <Description>
                        {description}
                    </Description>
                </DescriptionView>
            </WritingView>
            
            <ButtonView>
                <NextButton
                    buttonText={buttonText}
                    />
            </ButtonView>
        </Container>
    )
}