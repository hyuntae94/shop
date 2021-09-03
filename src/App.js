/* eslint-disable */
import './App.css';
import { Button,Navbar,Container,Nav,NavDropdown,Jumbotron } from 'react-bootstrap';

function App() {

  const size = {width:"300px", height:"300px"};

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">A-Shop⎈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
          <div className="col-md-4">
            <img width="100%" src="https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/947102659458571-e07a9c98-ea3f-4814-b4e6-31261c743183.jpg"></img>
            <h2>iPhone12Pro</h2>
          </div>
          <div className="col-md-4">
            <img width="100%" src="https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/7696374737960-06c26f91-d1ad-45c8-bf34-39ee275d068a.jpg"/>
            <h2>Apple Watch SE</h2>
          </div>
          <div className="col-md-4">
            <img width="100%" src="https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/872629760195-a8609d2a-6df8-4318-84a2-d6a099c5b09a.jpg"></img>
            <h2>AirPods</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
