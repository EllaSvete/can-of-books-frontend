import axios from 'axios';
import React from 'react';
import {Carousel, Button} from 'react-bootstrap';
import Newbook from './Newbook.js';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
        
      })
      
    } catch (error) {
      console.log('we have an error:')
      
    }
  }

  postBook = async (newBook) => {
    try {
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      console.log(createdBook.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  deleteBook = async (id) => {
    try {
      console.log(id);
      // maybe validation something?
      const config = {
        method: 'delete',
        baseURL: SERVER,
        url: `/books/${id}`,
      }
     await axios(config);
      // let url = `${SERVER}/books/${id}`;
      // await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }
 

  componentDidMount = async () => {
    
    this.getBooks();
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel variant="dark">
            {this.state.books.map((book, index) =>
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src="https://place-hold.it/300x500"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>Title: {book.title}</h1>
                  <p>Description: {book.description}</p>
                <Button onClick={() => this.deleteBook(book._id)}>Delete</Button>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <Newbook postBook={this.postBook}/>
      </>
    )
  }
}

export default BestBooks;
