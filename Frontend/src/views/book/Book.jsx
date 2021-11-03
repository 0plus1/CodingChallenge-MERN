import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import {
  BookItemsGrid, BookItemCard, BookTitleText, Hr,
  BookIsbnText, BookCreatedDateText, BookCreatedDateBg,
  HeaderWrapper, PageTitleText,
} from './Book.styles';

function Book({ books, handleClick }) {
  return (
    <>
      <HeaderWrapper>
        <PageTitleText>All books</PageTitleText>
      </HeaderWrapper>
      <Hr />
      <BookItemsGrid>
        {
          books.map((book) => (
            // eslint-disable-next-line no-underscore-dangle
            <BookItemCard key={book.isbn} onClick={() => handleClick(book._id)}>
              <BookTitleText>{book.title}</BookTitleText>
              <BookIsbnText>{`ISBN: ${book.isbn}`}</BookIsbnText>
              <BookCreatedDateBg>
                <BookCreatedDateText>{moment(book.createdAt).format('MMM Do YY')}</BookCreatedDateText>
              </BookCreatedDateBg>
            </BookItemCard>
          ))
        }
      </BookItemsGrid>
    </>
  );
}

Book.propTypes = {
  books: PropTypes.instanceOf(Object),
  handleClick: PropTypes.func.isRequired,
};

Book.defaultProps = {
  books: [],
};

export default Book;
