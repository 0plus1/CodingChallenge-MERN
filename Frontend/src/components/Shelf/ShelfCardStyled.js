import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  border: 1px solid #828282;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.1s ease;
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  &.active {
    color: red;
  }
  &:hover {
    background-color: pink;
    color: #828282;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { StyledLink };
