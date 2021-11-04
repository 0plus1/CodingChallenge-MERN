const faker = require("faker");
const { getObjectId } = require("mongo-seeding");

const books = [];
const shelves = ["fiction", "non-fiction", "poetry"];
for (let i = 0; i < 100; i += 1) {
  const title = faker.commerce.productName();
  const slug = title.toLowerCase().replace(/\s+/g, "-") + "-" + i + 1;
  books.push({
    shelfId: getObjectId(shelves[Math.floor(Math.random() * shelves.length)]),
    cover: faker.random.image(),
    slug,
    title,
    description: faker.lorem.paragraphs(3),
    isbn: faker.random.alphaNumeric(10),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  });
}

module.exports = books;
