import React from 'react';
import PropTypes from 'prop-types';
import { slugify } from '../../helpers/slugify';
import { StyledLink } from './BookTileStyled';

const BookTile = ({ title, id }) => (
  <StyledLink to={{ pathname: `/book/${slugify(title)}/${id}`, state: { id } }}>
    {title}
  </StyledLink>
);

BookTile.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
BookTile.defaultProps = {
  title: '',
  id: '',
};
export default BookTile;
