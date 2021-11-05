import React, { Component } from 'react';
import _ from 'lodash';
import  { Link } from 'react-router-dom';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import SearchBox from './searchBox';
import paginate from '../utils/paginate';
import BooksTable from './booksTable';
import { getShelves } from '../services/shelfApi';
import { getBooksInDB } from '../services/bookApi';

class Books extends Component {
    state = {
      pageSize: 15,
      currentPage: 1,
      books: [],
      shelves: [],
      searchQuery: '',
      selectedShelf: null,
      sortColumn: { path: 'title', order: 'asc' },
    };
    async componentDidMount() {
      getShelves().then((res) => ((this.setState({
        shelves: [{ _id: null,
          name: 'All Shelves' },
        ...res],
      }))
      ));
      getBooksInDB().then((res) => (this.setState({ books: res })));
    }
    getPagedData = () => {
      const {
        pageSize,
        currentPage,
        searchQuery,
        selectedShelf,
      } = this.state;
      const { sortColumn, books: allBooks } = this.state;
      let filtered = allBooks;
      if (searchQuery) {
        filtered = allBooks.filter(
          (m) => m.title.toLowerCase().startsWith(searchQuery.toLocaleLowerCase()),
        );
      }
      else if (selectedShelf && selectedShelf._id)
            filtered = allBooks.filter(m => m.shelf._id === selectedShelf._id);
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
            
        const books = paginate(sorted, currentPage, pageSize);
        
        return { totalCount: filtered.length, data: books };
    }
    
    handleDelete = (book) => {
        //console.log(movie);   
        const books = this.state.books.filter(b => b._id !== book._id); 
        this.setState({ books });    //Es6 simplified books: books
    }
    
    handleShelfSelect = genre => {
        //console.log("Genre Selected....", genre);
        this.setState({ selectedShelf: genre, searchQuery: '', currentPage: 1 });
    }
    
    handleLike = (book) => {
        //console.log('Like icon clicked....', movie);
        const books = [...this.state.books];
        const index = books.indexOf(book);
        books[index] = {...books[index]}
        books[index].liked = !books[index].liked; //Toggling
        this.setState({ books });
    }
    
    handlePageChange = page => {
        //console.log('Pagination clicked....', page);
        this.setState({ currentPage: page });
    }
    
    handleSort = sortColumn => {
        //console.log('Handled sorting ....', sortColumn); 
        this.setState({ sortColumn });
    }

    handleChange = query => {
        this.setState({ searchQuery: query, selectedShelf: null, currentPage: 1 });
    }
    
    render() {
        const { length: count } = this.state.books;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
        
        if(count === 0) 
            return <p>There are no books in the Database...</p>;      
            
        const { totalCount, data: books } = this.getPagedData();
                
        return (
            <div className='row'>
                <div className='col-3'>
                    <ListGroup  
                        items={this.state.shelves} 
                        selectedItem={ this.state.selectedShelf } 
                        onItemSelect={ this.handleShelfSelect } 
                    />
                </div>
                <div className='col'>
                    <Link to='/books/new' className='btn btn-primary mb-2 mt-4'>New Book</Link>
                    
                    <p>Showing { totalCount } numbers of books in the Database.</p>
                    
                    <SearchBox  value={ searchQuery } onChange={ this.handleChange } />
                    
                    <BooksTable 
                        onDelete = { this.handleDelete } 
                        onLike = { this.handleLike } 
                        sortColumn = { sortColumn }
                        onSort = { this.handleSort }
                        books = {books} 
                    />
                    
                    <Pagination 
                        itemCount={ totalCount } 
                        pageSize={ pageSize }
                        currentPage={ currentPage }
                        onPageChange={ this.handlePageChange } 
                    />
                </div>                
            </div>            
        );
    }
}


export default Books;