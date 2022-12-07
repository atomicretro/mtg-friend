import styled from 'styled-components';

export const Modal = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Alexandria', sans-serif;
  background: #ffffff;
  padding: 20px;
  z-index: 2;

  h2 {
    font-size: 40px;
    margin: 0 0 20px 0;
  }
`;
