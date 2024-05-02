import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../assets/logo.png"

const MyNavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} width='100' height='55' className='d-inline-block align-top' alt='React Bootstrap logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Tv Shows</Nav.Link>
            <Nav.Link href='#link'>Movies</Nav.Link>
            <Nav.Link href='#link'>Recently Added</Nav.Link>
            <Nav.Link href='#link'>My List</Nav.Link>
          </Nav>
          <div className='d-flex align-items-center'>
            <i className='bi bi-search icons'></i>
            <div id='kids' className='fw-bold'>
              KIDS
            </div>
            <i className='bi bi-bell icons'></i>
            <i className='bi bi-person-circle icons'></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavBar
