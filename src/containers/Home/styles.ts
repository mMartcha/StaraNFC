import styled from "styled-components";

export const ContainerView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
    
`
export const CoverPictureView = styled.div`
    width:100%;
    max-width: 500px;
    height: 260px;
    min-height: 200px;
    max-height: 350px;
    position: absolute; 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1; 
    overflow: hidden; 
    top: -80px;
    object-fit: cover;
    

`
export const ProfilePictureView = styled.div`
    width:150px;
    height: 150px;
    border-radius: 90px;
    position: absolute; 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2; 
    overflow: hidden; 
`
export const InformationContainerView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative; 
    margin-top: 170px; 
    margin-bottom: 20px;
    width: 100%;


`

export const ScrollView = styled.div`
    width: 100%; 
    height: 300px;
    overflow-y: auto; 
    overflow-x: hidden; 
    display: flex;
    flex-direction: column; 
    gap: 20px;
    padding-bottom: 50px;
    
    & > * {
        flex-shrink: 0;
    }
      /* Estilos para a barra de rolagem */
      &::-webkit-scrollbar {
        width: 8px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #666; /* Cor do "polegar" da barra de rolagem */
        border-radius: 4px; /* Borda arredondada */
    }

    &::-webkit-scrollbar-track {
        background-color: #333; /* Cor do fundo da barra de rolagem */
    }

    /* Estilos para Firefox */
    scrollbar-width: thin;
    scrollbar-color: #666 #333;
`

export const BottomView = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    height: 50px;
    position: fixed;
    bottom: 0;
     
    `

