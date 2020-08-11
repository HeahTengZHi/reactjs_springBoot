import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Book from './components/Book';
import BookList from './components/BookList';

//Need to Install
//npm i --save react-router-dom {For Router}
//npm install react-bootstrap bootstrap

//Add link
//Add into index.html: <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>

function App() {
  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/add" exact component={Book}/>
              <Route path="/list" exact component={BookList}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
