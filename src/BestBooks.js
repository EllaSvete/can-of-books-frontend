import axios from 'axios';
import React from 'react';
import {Carousel, Button, Modal} from 'react-bootstrap';
import Newbook from './Newbook.js';
import UpdateBookForm from './UpdateBookForm';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  handleClose = () => this.setState({ show: false })

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log(results.data);
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
     this.getBooks();
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  updateBook = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books/${bookToUpdate._id}`;
      await axios.put(url, bookToUpdate);
      this.getBooks();
    } catch(error) {
      console.log('error');
    }
  }

  descriptionUpdated = (updatedDesc) => {
    var currentBook = this.state.bookToUpdate;
    currentBook.description = updatedDesc;
    this.setState({ bookToUpdate: currentBook });
    
  }

  titleUpdated = (updatedTitle) => {
    var currentBook = this.state.bookToUpdate;
    currentBook.title = updatedTitle;
    this.setState({ bookToUpdate: currentBook });
    
  }

 emailUpdated = (updatedEmail) => {
    var currentBook = this.state.bookToUpdate;
    currentBook.email = updatedEmail;
    this.setState({ bookToUpdate: currentBook });
    
  }

  statusUpdated = (updatedStatus) => {
    var currentBook = this.state.bookToUpdate;
    currentBook.status = updatedStatus;
    this.setState({ bookToUpdate: currentBook });
  }
 

  componentDidMount = async () => {

    this.getBooks();
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  handleUpdate = (book) => {
    console.log(book);
    this.setState({ bookToUpdate: book });
    this.setState({ show: true });
  };

  saveChange = () => {
    this.updateBook(this.state.bookToUpdate);
    this.setState({ show: false });
  }


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
                <Button onClick={() => this.handleUpdate(book)}>Update</Button>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <Newbook 
        postBook={this.postBook}/>
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UpdateBookForm bookToUpdate={this.state.bookToUpdate} descriptionUpdated={this.descriptionUpdated} titleUpdated={this.titleUpdated} emailUpdated={this.emailUpdated} statusUpdated={this.statusUpdated} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.saveChange}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
      </>
    )
  }
}

export default BestBooks;
