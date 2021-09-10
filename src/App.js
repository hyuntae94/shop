/* eslint-disable */
import './App.css';
import React, {useState} from "react";
import { Button,Navbar,Container,Nav,NavDropdown,Jumbotron } from 'react-bootstrap';
import data from "./data.js";
import Info from "./item.js";
import Detail from "./Detail.js";

import { Link, Route, Switch } from "react-router-dom"


function App() {

  let [item, item변경] = useState(data)
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to ="/">A-Shop⎈</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/iphone">iPhone</Link></Nav.Link>
              <Nav.Link ><Link to="/watch">Watch</Link></Nav.Link>
              <Nav.Link ><Link to="/airpods">AirPods</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    <Switch>
      <Route exact path="/">
        <header className="header">
          <span>온라인으로 쇼핑</span>하고 무료 배송, 스페셜리스트 지원 등의 혜택을 받으세요.
        </header>
        <Jumbotron className="bg">
          <h1 className="bg_title">20% Season Off</h1> 
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="list_title">
          어떤 제품이 당신에게 맞을까요?
        </div>
        <div className="container">
          <div className="row">
            {
              item.map( (el,idx) => <Info shoes={item[idx]} key={idx}/> )
            }
          </div>
        </div>
      </Route>
      <Route path="/iphone">
        <Detail src={item[0].src} price={item[0].price}/>
      </Route>
      <Route path="/watch">
        <Detail src={item[1].src} price={item[1].price}/>
      </Route>
      <Route path="/airpods">
        <Detail src={item[2].src} price={item[2].price}/>
      </Route>
      <Route path="/:id"> 
        <div>lalalala</div>
      </Route>
    </Switch>
    </div>

  );
}

export default App;
