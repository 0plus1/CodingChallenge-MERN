import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleShelf } from '../actions/apiActions';
import { GoBackButton, H1 } from '../components/Layout/LayoutStyled';
import BookTile from '../components/Book/BookTile';

const SingleShelf = () => {
  /*    eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]    */

  const { id } = useParams();
  const history = useHistory();
  const { shelfId, shelfBooks, shelfName } = useSelector(
    (state) => state.shelves,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (shelfId !== id) {
      getSingleShelf(dispatch, id);
    }
  }, []);

  return !shelfId ? (
    <>Loading</>
  ) : (
    <>
      <GoBackButton onClick={() => history.goBack()} type="button">
        {'< '}
        Go Back
      </GoBackButton>
      <H1>{shelfName}</H1>
      {shelfBooks.map((b) => (
        <BookTile key={b._id} title={b.title} isbn={b.isbn} id={b._id} />
      ))}
    </>
  );
};

export default SingleShelf;
