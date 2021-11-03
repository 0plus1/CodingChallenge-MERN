import styled from 'styled-components';

export const MainContainer = styled.div`
  font-family: Montserrat;
  padding: 50px;
`;

export const BookItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  margin-top: 30px;
  margin-bottom: 30px;

  @media(max-width: 848px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 450px) {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const PageTitleText = styled.h1`
  margin: 0;
`;

export const BookItemContainer = styled.div`
  border: 1px solid #CCC;
  padding: 1em;
  margin-top: 30px;
`;

export const BookItemCard = styled.div`
  border: 1px solid #CCC;
  cursor: pointer;
  padding: 1em;

  :hover {
    box-shadow: 1px 1px 5px 2px #ECEAEC;
  }

  @media(max-width: 450px) {
    margin-bottom: 1em;
  }
`;

export const BookTitleText = styled.h4`
  text-transform: uppercase;
`;

export const BookIsbnText = styled.p`
`;

export const BookCreatedDateText = styled.p`
  margin: 0;
`;

export const BookCreatedDateBg = styled.span`
  color: #FFF;
  background: #2D2D2D;
  border-radius: 3px;
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  float: right;
  padding: 0.3em;
  margin-top: 2em;
`;

export const Hr = styled.hr`
  border: 1px solid #F0F0F0;
`;

export const AnchorText = styled.span`
  cursor: pointer;
  font-size: 11px;

  :hover {
    text-decoration: underline;
  }
`;

export const BookActionButtonWrapper = styled.div`
  margin: 1em 0 1em;
`;

export const BookActionButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  font-family: Montserrat;
  padding: 0.8em;
  margin-right: 1em;

  :hover {
    background: #000;
    color: #FFF;
  }
`;
