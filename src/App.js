/* eslint-disable */
import './App.css';
import React, {useEffect, useState, useContext  } from "react";
import { Button,Navbar,Container,Nav,NavDropdown,Jumbotron } from 'react-bootstrap';
import data from "./data.js";
import Detail from "./Detail.js";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom"

let 재고context = React.createContext();  


function App() {
  
  let [재고,재고변경] = useState([10,20,30]);
  let [item, item변경] = useState(data)
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to ="/">A-Shop⎈</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/iphone">iPhone</Nav.Link>
              <Nav.Link as={Link} to="/watch">Watch</Nav.Link>
              <Nav.Link as={Link} to="/airpods">AirPods</Nav.Link>
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
          <재고context.Provider value={재고}>
            <div className="row">
              {
                item.map( (el,idx) => <Info  shoes={item[idx]} key={idx}/> )
              }
            </div>
          </재고context.Provider>
          <button className="btn btn-primary" onClick={ () => {
          axios.get("https://codingapple1.github.io/shop/data2.json")
          .then( res => {
            item변경([...item, ...res.data])
          })//성공하면 then()
          .catch( () => {
            console.log("실패했습니다.")
          })//실패하면 catch()
        }}>더보기</button>
        </div>
      </Route>
      <Route path="/iphone/">
        <Detail item={item[0]}/>
      </Route>
      <Route path="/watch">
        <Detail item={item[1]}/>
      </Route>
      <Route path="/airpods">
        <Detail item={item[2]}/>
      </Route>
    </Switch>
    </div>

  );
}

function Info(props){

  return (
      <div className="col-md-4">
          <img width="250px" src={props.shoes.src}></img>
          <h4 style={ { marginTop: "10px" } }>{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
          <p> ₩ {props.shoes.price} </p>
          <Product key={props.key}/>
      </div>
  )
}

function Product(props){
  
  let 재고 = useContext(재고context);
  
  return (
    <div>
      <p>남은 재고 상품 : {재고}</p>
    </div>
  )
}
export default App;
