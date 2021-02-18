import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { Container, Field, H1, H4 } from './BookCardStyled';

const BookCard = ({ title, isbn }) => (
  <Container>
    <H1>{title}</H1>
    <Field style={{ display: 'inline' }}>ISBN: </Field>
    <H4 style={{ display: 'inline' }}>{isbn}</H4>
  </Container>
);

BookCard.propTypes = {
  title: PropTypes.string,
  isbn: PropTypes.string,
};
BookCard.defaultProps = {
  title: '',
  isbn: '',
};
export default BookCard;
