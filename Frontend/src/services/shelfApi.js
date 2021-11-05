import axios from 'axios';

export const shelvesInDB = [
  { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
  { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
  { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
];

const url = 'http://localhost:4000/api/shelf/';

export async function getShelves() {
  // return shelves.filter(g => g);

  const getShelvesInDb = await axios.get(url);
  console.log(getShelvesInDb);

  return getShelvesInDb.status === 200 ? getShelvesInDb.data : null;
}
