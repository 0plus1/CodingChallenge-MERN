import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NotFound from "../components/404";
import Card from "../components/Card";
import Container from "../components/Container";
import bookActionDispatcher from "../redux/actions/books";

const BookDetails = () => {
  const { bookSlug } = useParams();
  const { book, isLoading } = useSelector((state) => state?.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookActionDispatcher.getABook(bookSlug));
  }, [bookSlug]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <Link to="/">Home</Link>
      {book ? (
        <Card detailed>
          <div className="book-details--img">
            <img src={book.cover} alt={book?.title} />
          </div>
          <h2>Title: {book.title}</h2>
          <p>
            <strong>Description</strong>: {book.description}
          </p>
          <p>
            <strong>ISBN</strong>: {book.isbn}
          </p>
          <p>
            <strong>Published Date</strong>: {book.createdAt}
          </p>
        </Card>
      ) : (
        <NotFound />
      )}
    </Container>
  );
};

export default BookDetails;
