import React from 'react'
import { ThreeDots} from "react-loader-spinner";
import styled from 'styled-components';

const Spinner = ({message}) => {
  (
    <SpinnerContainer>
     <ThreeDots  color='#f34242' height={60} width={60} />
    <Message>{message}</Message>
    </SpinnerContainer>
  )
}

export default Spinner;


const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%
`;

const Message = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 0 2px;
  color: #fff;
`;