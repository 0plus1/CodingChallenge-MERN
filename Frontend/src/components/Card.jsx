import styled from "styled-components";

const Card = styled.div`
  background-color: #f3fff9;
  padding: 1rem;
  border-radius: 10px;
  margin: ${({ detailed }) => (detailed ? "auto" : "")};
  margin-top: ${({ detailed }) => (detailed ? "1rem" : "")};
  max-width: 800px;

  .book-details--img {
    max-width: 500px;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 10px;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export default Card;
