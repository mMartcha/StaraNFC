import Button from "../../components/ButtonSocial"
import {  } from "../../components/ButtonSocial/styles"
import InformationView from "../../components/InformationView"
import Labs from "../../assets/images/Labs.svg"; 
import ProfilePic from "../../assets/images/Foto.png";
import CoverPic from "../../assets/images/Capa.png"; 
import {  BottomView, ProfilePictureView, InformationContainerView, CoverPictureView, ScrollView, ContainerView, } from "./styles"



export default function Home(){


    const data = [
        { id: 1, title: "Linkedin" },
        { id: 2, title: "Instagram" },
        { id: 1, title: "Telegram" },
        { id: 2, title: "Facebook" },
        { id: 1, title: "Youtube" },
    ];

    return(
        <ContainerView>

            <CoverPictureView>
                <img
                    src={CoverPic}
                    style={{
                        objectFit: "cover",
                        width:500,
                        maxHeight:"350px",
                    
                        
                        borderBottomRightRadius:20,
                        borderBottomLeftRadius:20
                    }}
                />
            </CoverPictureView>

            <ProfilePictureView>
                <img
                    src={ProfilePic}
                    style={{
                        height: "180px",  
                        objectFit: "cover",
                    }}
                />

            </ProfilePictureView>

            <InformationContainerView>
                <InformationView title="John Doe" jobPosition="Dev" />
            </InformationContainerView>
            
            <ScrollView>
                {data.map((item) => (
                <Button key={item.id} which={item.id} title={item.title} />
                ))}
            </ScrollView>

                <BottomView>
                    <img
                        src={Labs}
                    />
                </BottomView>
            
        </ContainerView>
    )
}



