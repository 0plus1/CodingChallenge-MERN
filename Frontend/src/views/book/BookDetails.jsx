import React, { useState, useLayoutEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getBook } from '../../actions/books';

import {
  HeaderWrapper, AnchorText, BookTitleText, Hr,
  PageTitleText, BookItemContainer, BookIsbnText,
  BookActionButton, BookActionButtonWrapper, BookCreatedDateText,
} from './Book.styles';

function BookDetails({ book: book_ }) {
  const initialState = book_[0];
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [book, setBook] = useState(initialState);
  const { books } = useSelector((state) => state.books);

  useLayoutEffect(() => {
    dispatch(getBook(id));
    if (books.length) setBook(books[0]);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <PageTitleText>Book details</PageTitleText>
        <AnchorText onClick={() => history.goBack()}>Go back to previous page</AnchorText>
      </HeaderWrapper>
      <Hr />
      {
        book && (
          <BookItemContainer>
            <BookTitleText>{book.title}</BookTitleText>
            <BookIsbnText>{`ISBN: ${book.isbn}`}</BookIsbnText>
            <BookCreatedDateText>{`Date added: ${moment(book.createdAt).format('LLL')}`}</BookCreatedDateText>
            <BookActionButtonWrapper>
              <BookActionButton>Read Now</BookActionButton>
              <BookActionButton>Add to Favorite</BookActionButton>
            </BookActionButtonWrapper>
          </BookItemContainer>
        )
      }
    </>
  );
}

BookDetails.propTypes = {
  book: PropTypes.instanceOf(Object),
};

BookDetails.defaultProps = {
  book: {},
};

export default BookDetails;
