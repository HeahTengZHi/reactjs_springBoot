import React, { Component } from 'react'
import {Navbar,Col, Container} from 'react-bootstrap';
export default class Footer extends Component {
    render() {
        let fullYear=new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>
                            {fullYear}-{fullYear+1}, Reserved and Refer by Almighty java <br/>
                            <a href=" https://www.youtube.com/watch?v=WKkM5rFed2g&list=PLZdfbI_OZWAMvhSl32tFcD6M9x_Pqtkwb&index=3">Click here for Youtube video!!</a>
                        </div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}
