import React from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import Books from './BestBooks';

let SERVER = process.env.REACT_APP_SERVER;

class NewBook extends React.Component {

  constructor(props){
    super(props);
    this.state ={
books: []
    }
  }

  // postBook = async (newBook) => {
  //   try {
  //     let url = `${SERVER}/books`;
  //     let createdBook = await axios.post(url, newBook);
  //     console.log(createdBook.data);
  //     this.setState({
  //       books: [...this.state.books, createdBook.data]
  //     })
  //   } catch(error){
  //     console.log('we have an error: ', error.response.data)
  //   }
  // }

  deleteBook = async (id) => {
    try {
      // maybe validation something?
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        cats: updatedBooks
      });
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let statusValue = false;
    if(e.target.status.value === 'on'){
       statusValue = true;

    }else {
       statusValue = false;
    }
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: statusValue,
      email: e.target.email.value
    }
    console.log(newBook);
    this.props.postBook(newBook);
  }
  // componentDidMount() {
  //   this.getBooks();
  // }
render(){
  return(
<><header>
<h1>Books you like</h1>
</header>
<main>
{
  this.state.books.length > 0 && 
  <>
  <Books books={this.state.books} deleteBook={this.deleteBook}/>
  </>
}
<Container className="mt-5">
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="read" />
              </Form.Group>
              <Button  type="submit">Add Book</Button>
            </Form>
          </Container>

</main>





</>

  )
}

}


export default NewBook;