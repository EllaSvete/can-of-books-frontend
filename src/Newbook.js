import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Books from './BestBooks';
// import Modal from '.react-bootstrap';

class NewBook extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      books: []
    }
  }


  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
      email: e.target.email.value
    }
    console.log(newBook);
    this.props.postBook(newBook);
    e.target.title.value = '';
    e.target.description.value = '';
    e.target.status.checked = false;
    e.target.email.value = '';
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
  <Books books={this.state.books}/>
  </>
}
{/* <Modal> */}
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
          {/* </Modal> */}

</main>





</>

  )
}

}


export default NewBook;