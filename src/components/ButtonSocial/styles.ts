import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 70px;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.border};;
    align-items: center;
    justify-content: space-around;
    gap: 60px;
    display: flex;

`

export const IconContainer = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 6px;
    `

export const Text = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
` 

