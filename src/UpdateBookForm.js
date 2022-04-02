import React from 'react';
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';

let SERVER = process.env.REACT_APP_SERVER;

class UpdateBookForm extends React.Component {
  
  doUpdateBook = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      let updatedBookData = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook;
      });
      this.setState({books: updatedBookData});
    } catch(error) {
      console.log('error');
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    
    
    let bookToUpdate = {
      title: e.target[0].value || this.props.bookToUpdate.title,
      description: e.target[1].value || this.props.bookToUpdate.description ,
      status: e.target[3].value || this.props.bookToUpdate.status,
      email: e.target[2].value || this.props.bookToUpdate.email,
      _id: this.props.bookToUpdate._id,
      __v: this.props.bookToUpdate.__v
    
    }

    this.props.handleUpdate(bookToUpdate);
  }

  updateTitle = (e) => {
    this.props.titleUpdated(e.target.value);
  };

  updateDescription = (e) => {
    this.props.descriptionUpdated(e.target.value);
  };
  updateEmail = (e) => {
    this.props.emailUpdated(e.target.value);
  };

  updateStatus = (e) => {
    this.props.statusUpdated(e.target.checked);
  };


    render () {
      return (
        <>
        <Container className="mt-5">
            <Form>
              <Form.Group controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" defaultValue={this.props.bookToUpdate.title} onChange={this.updateTitle}/>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" defaultValue={this.props.bookToUpdate.description} onChange={this.updateDescription} />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email </Form.Label>
                <Form.Control type="text" defaultValue={this.props.bookToUpdate.email}
                onChange={this.updateEmail} />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="read" checked={this.props.bookToUpdate.status} onChange={this.updateStatus} />
              </Form.Group>
            </Form>
          </Container>
        </>
      );
    }
}

export default UpdateBookForm;