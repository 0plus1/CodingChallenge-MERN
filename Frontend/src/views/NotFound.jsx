import React from 'react';
import { MainContainer, MessageText, Button } from './NotFound.styles';

function NotFound() {
  return (
    <>
      <MainContainer>
        <MessageText>This page can not be found</MessageText>
        <Button href="/">Go to Home</Button>
      </MainContainer>
    </>
  );
}

export default NotFound;
