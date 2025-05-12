import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 260px;
    width: 100%;
    border-radius: 20px;
    gap: 20px;    
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.border};
    `

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
`

export const TextContainer = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Name = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    `

export const JobPosition = styled.p`
    font-weight: 400;  
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    `

export const NameAndJobView = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

`


export const ChangeMode = styled.div`
    position: absolute;
    top: 20px; /* Ajuste a posição vertical */
    right: 20px; 
    
`
