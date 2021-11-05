import React from "react";
import Joi from 'joi-browser';
import Form from './common/form';
import { getBook, saveBook } from '../services/bookApi';
import { getShelves } from '../services/shelfApi';

class BookForm extends Form {
  state = {
    data: {
      title: "",
      shelfId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    shelves: [],
    errors: {}
  }
  
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    shelfId: Joi.string().required().label("Shelf"),
    numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate")
  };
  
  componentDidMount(){
    const shelves = getShelves()
        .then(res => this.setState({ shelves: res }));
    
    const bookId = this.props.match.params.id;
    if(bookId === "new") return;
    
    const book = getBook(bookId);
    if(!book) return this.props.history.replace("/not-found");
    
    this.setState({ data: this.mapToViewModel(book) });
  }
  
  
  mapToViewModel(book){
    return {
      _id: book._id,
      title: book.title,
      shelfId: book.genre._id,
      numberInStock: book.numberInStock,
      dailyRentalRate: book.dailyRentalRate
    };
  }
  
  doSubmit = () => {
    saveBook(this.state.data);
    
    this.props.history.push("/books");
  }
  
  render() { 
    return (
      <div className="mt-4">
        <h1>Book Form</h1>
        <form onSubmit={ this.handleSubmit}>
          { this.renderInput("title", "Title")}
          { this.renderSelect("shelfId", "Shelf", this.state.shelves)}
          { this.renderInput("numberInStock", "Number in Stock", "number")}
          { this.renderInput("dailyRentalRate", "Rate")}
          { this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
 
export default BookForm;

// const MovieForm = ({ match, history }) => {
//   return (
//     <div>
//         <h1>Movie Form {match.params.id}</h1>
//         <button className="btn btn-primary" onClick={() => history.push('/books')}>save</button>
//     </div>
//   );
// };

// export default MovieForm;