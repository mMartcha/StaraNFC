import styled from "styled-components";

export const Container = styled.button`
    background-color:#E56425;
    height: 50px;
    width: 250px;
    border-radius: 10px;
    border-width: 0px;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    &:hover {
        background-color: #d3541f; 
        transform: scale(1.05); 
        transition: all 0.5s ease; 
    }
`
export const Text = styled.p`
    font-size: 20px;
    color: white;
    
`