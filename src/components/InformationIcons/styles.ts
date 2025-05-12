import styled from "styled-components";
import { ITheme } from "../../styles/theme";


export const Container = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.borderIcons};;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};;
    
    ;

`