import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
      margin: 0px;
      padding: 0px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    p{
      color: ${({theme}) => theme.Colors.Card};
    }
    ::-webkit-scrollbar{
      background-color: ${({theme}) => theme.Colors.scrollBar};
    }
    ::-webkit-scrollbar-corner{
      width: 0px;
    }
    ::-webkit-scrollbar-thumb{
      background-color: #0F4037;
    }
    .nav-tabs{
      border-radius: ${({theme}) => theme.border.primary};
      background-color: ${({theme}) => theme.Colors.NavLink};
    }
    .nav-link{
      color: black;
    }
`;
 
export default GlobalStyle;