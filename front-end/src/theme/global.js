import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-size: 100%;
        font-family: 'Open Sans', sans-serif;
    };
    
    body {
        box-sizing: border-box;
        background: ${(props) => props.theme?.background};
        min-height:100vh;
        height:100%;
        margin:0;
        overflow-x:hidden;
    }; 
`;
