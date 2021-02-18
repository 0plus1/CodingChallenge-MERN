import styled from 'styled-components';

const GlobalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  padding: 50px;
  padding-top: 10rem;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  color: grey;
  font-family: 'roboto', sans-serif;
  font-size: 50px;
  width: 100%;
`;

const GoBackButton = styled.button`
  font-weight: bold;
  font-size: 16px;
  color: grey;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    color: palevioletred;
  }
  &:foucs {
    color: palevioletred;
    outline: 1px solid grey;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { GlobalContainer, GoBackButton, H1 };
