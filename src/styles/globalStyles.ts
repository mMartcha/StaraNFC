import { createGlobalStyle } from "styled-components";

 const myGlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color: white;
        
    }
    p{
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
    }
`

export default myGlobalStyles