import styled from 'styled-components';

export const SignupContainer = styled.div`
  position: relative;
  background-color: #000;
`;

export const SignupWrappers = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  h4{
    font-size: 1.5rem;
  }
  h6{
    font-size: 1rem;
  }

`;

export const Text = styled.h1`
  padding: 0 20rem;
  font-size: 2.5rem;
  @media screen and (max-width: 960px){
    padding: 0 15px;
  }
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: ${({password}) => (password ? '1fr 1fr':'2fr 1fr')};
  width: 60%;
  background-color: #000000b0;
`;

export const Input = styled.input`
  color: #000;
  border: 1px solid #000;
  padding: ${({small}) => (small ? '0.5rem 1rem':'1.5rem')};
  font-size: 1.2rem;
  outline: none;
  width: ${({small}) => (small ? '15rem':'')};
`;