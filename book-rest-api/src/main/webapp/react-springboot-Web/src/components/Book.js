import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPlusSquare, faUndo } from '@fortawesome/free-solid-svg-icons';
import MyToast from '../components/MyToast';
import axios from 'axios';

export default class Book extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show=false;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        title: '', author: '', coverPhotoURL: '', isbnNumber: '', price: '', language: ''
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    submitBook(event) {
        event.preventDefault();

        const book = {
            title: this.state.title,
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL,
            isbnNumber: this.state.isbnNumber,
            price: this.state.price,
            language: this.state.language
        };

        axios.post("http://localhost:8081/rest/books", book)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show":true});
                    setTimeout(()=> this.setState({"show":false}), 2000);
                }else{
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { title, author, coverPhotoURL, isbnNumber, price, language } = this.state;

        return (
            <div>
                <div style={{"display":this.state.show? "block":"none"}}>
                    <MyToast children={{show:this.state.show, message:"Book Saved Successfully"}}/>
                </div>


                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} fixedWidth />Add Book</Card.Header>
                    <Form onSubmit={this.submitBook} onReset={this.resetBook} id="bookFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Book Title</Form.Label>
                                    <Form.Control required
                                        autoComplete="off"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        name="title"
                                        value={title}
                                        onChange={this.bookChange}
                                        placeholder="Enter Book Title" />
                                    <Form.Text className="text-muted">
                                        Please enter book title
                                </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control required
                                        autoComplete="off"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        name="author"
                                        value={author}
                                        onChange={this.bookChange}
                                        placeholder="Enter Book Author" />
                                    <Form.Text className="text-muted">
                                        Please enter book title
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                    <Form.Label>Cover Photo URL</Form.Label>
                                    <Form.Control required
                                        autoComplete="off"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        name="coverPhotoURL"
                                        value={coverPhotoURL}
                                        onChange={this.bookChange}
                                        placeholder="Enter Book Cover Photo URL" />
                                    <Form.Text className="text-muted">
                                        Please enter book Cover Photo URL
                                </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridISBNNumber">
                                    <Form.Label>ISBN Number</Form.Label>
                                    <Form.Control required
                                        autoComplete="off"
                                        type="number"
                                        className={"bg-dark text-white"}
                                        value={isbnNumber}
                                        onChange={this.bookChange}
                                        name="isbnNumber"
                                        placeholder="Enter Book ISBN Number" />
                                    <Form.Text className="text-muted">
                                        Please enter book ISBN Number
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required
                                        autoComplete="off"
                                        type="number"
                                        className={"bg-dark text-white"}
                                        value={price}
                                        onChange={this.bookChange}
                                        name="price"
                                        placeholder="Enter Book Price" />
                                    <Form.Text className="text-muted">
                                        Please enter book Price
                                </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLanguage">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control required
                                        autoComplete="off"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        value={language}
                                        onChange={this.bookChange}
                                        name="language"
                                        placeholder="Enter Book Language" />
                                    <Form.Text className="text-muted">
                                        Please enter book Language
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>

                        </Card.Body>

                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} fixedWidth />Submit
                        </Button>{' '}

                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} fixedWidth />Reset
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        )
    }
}
