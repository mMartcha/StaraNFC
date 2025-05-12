import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    height: 800px;
    border-radius:40px;
    border-width: 1px;
    border-color: #CCCCCC;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-style: solid;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    /* gap: 30px; */
    
;

`
export const Title = styled.p`
    color: #E56425;
    font-size: 36px;
    text-align: left;
    
`

export const TitleView = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;

`

export const WritingView = styled.div`
    background-color: red;
    gap:30px
`

export const Description = styled.p`
    font-size: 36px;
    text-align: left;
`

export const DescriptionView = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
      
`
export const ButtonView = styled.div`
    display: flex;
    
`

