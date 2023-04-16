import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
 } 

`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: ${({borderR}) => (borderR ? '':'0.2rem')};
  font-weight: bolder;
  font-size: 1.05rem;
  transition: 0.3s ease-in-out;
  &:hover{
    opacity: 0.9;
  }
`;

export default GlobalStyle;
