import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoBackButton, H1 } from '../components/Layout/LayoutStyled';

const FourOFour = () => {
  const history = useHistory();

  return (
    <>
      <H1>Sorry it seems you have lost your way.</H1>
      <GoBackButton onClick={() => history.goBack()} type="button">
        {'< '}
        Go Back
      </GoBackButton>
    </>
  );
};

export default FourOFour;
