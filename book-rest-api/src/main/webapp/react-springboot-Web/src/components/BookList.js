import React, { Component } from 'react'
import { Card, Table,Image,ButtonGroup,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks(){
        axios.get("http://localhost:8081/rest/books")
        .then(response => response.data)
        .then((data) => {
            this.setState({ books: data });
        });
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} fixedWidth />Book List</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN Number</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.books.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">{this.state.books.length} Book Available...</td>
                                </tr>
                            :
                                this.state.books.map((book)=>(
                                    <tr key={book.id}>
                                    <td>
                                        <Image src={book.coverPhotoURL} width="25" height="25"/>
                                        {book.title}
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{book.isbnNumber}</td>
                                    <td>{book.price}</td>
                                    <td>{book.language}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} fixedWidth /></Button>
                                            <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash} fixedWidth /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}
