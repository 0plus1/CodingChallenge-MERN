import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;
  padding: 50px;
  place-items: center;
`;

export const MessageText = styled.h2`
`;

export const Button = styled.a`
  cursor: pointer;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
