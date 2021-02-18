import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './ShelfCardStyled';

const ShelfCard = ({ name, slug, id }) => (
  <StyledLink to={{ pathname: `/shelf/${slug}/${id}`, state: { id } }}>
    {name}
  </StyledLink>
);

ShelfCard.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  id: PropTypes.string,
};
ShelfCard.defaultProps = {
  name: '',
  slug: '',
  id: '',
};
export default ShelfCard;
