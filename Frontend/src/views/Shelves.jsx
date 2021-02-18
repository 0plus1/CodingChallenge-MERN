import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShelves } from '../actions/apiActions';
import ShelfCard from '../components/Shelf/ShelfCard';

const Shelves = () => {
  /*    eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]    */

  const { shelves } = useSelector((state) => state.shelves);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!shelves) getShelves(dispatch);
  }, []);

  return !shelves ? (
    <>Loading</>
  ) : (
    <>
      {shelves.map((s) => (
        <ShelfCard key={s._id} name={s.name} slug={s.slug} id={s._id} />
      ))}
    </>
  );
};

export default Shelves;
