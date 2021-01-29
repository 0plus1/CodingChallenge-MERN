const faker = require('faker');

const shelves = [
  {
    name: 'Fiction',
    slug: 'fiction',
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    name: 'Non fiction',
    slug: 'non-fiction',
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    name: 'Poetry',
    slug: 'poetry',
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
];

module.exports = shelves;
