import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllBooksFromShelf, getBook } from '../../actions/books';

import Book from './Book';
import BookDetails from './BookDetails';
import { MainContainer } from './Book.styles';

function BookContainer({ shelf, book }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { books } = useSelector((state) => state.books);

  const handleClick = (bookId) => {
    dispatch(getBook(bookId));
    setTimeout(() => history.push(`/book/${bookId}/read`), 20);
  };

  useLayoutEffect(() => {
    dispatch(getAllBooksFromShelf(id));
  }, []);

  return (
    <>
      <MainContainer>
        {
          shelf && (<Book books={books} handleClick={handleClick} />)
        }
        {
          book && (<BookDetails book={books} />)
        }
      </MainContainer>
    </>
  );
}

BookContainer.propTypes = {
  shelf: PropTypes.bool,
  book: PropTypes.bool,
};

BookContainer.defaultProps = {
  shelf: false,
  book: false,
};

export default BookContainer;
