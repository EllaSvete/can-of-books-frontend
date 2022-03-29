import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
            {this.state.books.map(book =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://place-hold.it/300x500"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>Title: {book.title}</h1>
                  <p>Description: {book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
