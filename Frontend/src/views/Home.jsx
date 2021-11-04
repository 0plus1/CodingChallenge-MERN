import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import CardList from "../components/CardList";
import Container from "../components/Container";
import bookActionDispatcher from "../redux/actions/books";

const Home = () => {
  const [category, setCategory] = useState("poetry");
  const { books, isLoading } = useSelector((state) => state?.books);
  const dispatch = useDispatch();

  const handleCategoryClick = (e) => {
    setCategory(e.target.dataset.category);
  };
  useEffect(() => {
    dispatch(bookActionDispatcher.getBooks(category));
  }, [category]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <h1>
        List of Books on {category[0].toUpperCase() + category.slice(1)} Shelf
      </h1>

      <Shelves>
        <ul>
          <li>
            <button
              type="button"
              onClick={handleCategoryClick}
              data-category="poetry"
            >
              Poetry
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleCategoryClick}
              data-category="non-fiction"
            >
              Non Fiction
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleCategoryClick}
              data-category="fiction"
            >
              Fiction
            </button>
          </li>
        </ul>
      </Shelves>
      <CardList className="books--container">
        {books.length ? (
          books.map(({ title, isbn, createdAt, slug }) => (
            <Card key={slug} className="card">
              <Link title="Click to view details" to={`/book/${slug}`}>
                <h2>Title: {title}</h2>
                <p>ISBN: {isbn}</p>
                <p>Released Date: {createdAt}</p>
              </Link>
            </Card>
          ))
        ) : (
          <h5>No books in this Shelf</h5>
        )}
      </CardList>
    </Container>
  );
};
export default Home;

const Shelves = styled.div`
  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    li {
      margin-right: 1rem;
      button {
        font-size: 1.5rem;
        padding: 1em 1.5em;
        cursor: pointer;
      }
    }
  }
`;
