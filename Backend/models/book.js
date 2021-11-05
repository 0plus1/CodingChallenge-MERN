const faker = require('faker');
const mongoose = require('mongoose');
const { Shelf } = require('./shelf');

const bookSchema = new mongoose.Schema({
    title: 'string',
    isbn: 'string',
    // shelf: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Shelf'
    // },
    shelf: {_id: 'string', name: 'string'},
    numberInStock: 'number',
    dailyRentalRate: 'number',
    liked: Boolean
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

async function createBookCollection(){
    
    const books = [];
    const shelves = ['6183f0f2889b004a0043c92f', '6183f127e048720d21da491b', '6183f16a48ccff251fe12575'];
    const getShelf = shelves[Math.floor(Math.random() * shelves.length)];
    const getAllShelves = await Shelf.find().sort('title');
    const shelfName = getAllShelves.filter(g => `${g._id}` === getShelf); 
    const getName = shelfName[0].name;
    console.log('SHELF+++++', getName);
    
    for (let i = 0; i < 20; i += 1) {

        const book = new Book({
            title: faker.commerce.productName(),
            isbn: faker.random.alphaNumeric(10),
            shelf: { _id: getShelf, name: getName},
            numberInStock: faker.datatype.number({
                'min': 10,
                'max': 50
            }),
            dailyRentalRate: 3.5,
            liked: false
        });
        
        const result = await book.save();
        console.log('RESULT+++', result);
        
    }
    
}

async function listBooks(){
    const books = await Book
        .find()
        .populate('shelf')
        .select('title shelf')
}


exports.Book = Book;
exports.listBooks = listBooks;
exports.createBookCollection = createBookCollection;

