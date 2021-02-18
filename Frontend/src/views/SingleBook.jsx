import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBook } from '../actions/apiActions';
import BookCard from '../components/Book/BookCard';
import { GoBackButton } from '../components/Layout/LayoutStyled';

const SingleBook = () => {
  /*    eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]    */

  const { id } = useParams();
  const history = useHistory();
  const { book } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!book || book._id !== id) getSingleBook(dispatch, id);
  }, []);

  return !book ? (
    <>Loading</>
  ) : (
    <>
      <GoBackButton onClick={() => history.goBack()} type="button">
        {'< '}
        Go Back
      </GoBackButton>
      <BookCard
        key={book._id}
        title={book.title}
        isbn={book.isbn}
        id={book._id}
      />
    </>
  );
};

export default SingleBook;
