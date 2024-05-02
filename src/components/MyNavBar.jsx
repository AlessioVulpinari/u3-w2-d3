import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"

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
            <NavLink to='/' className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to='/tv-shows' className={"nav-link"}>
              Tv Shows
            </NavLink>
            <NavLink to='/profile' className={"nav-link"}>
              Profile
            </NavLink>
            <NavLink to='/settings' className={"nav-link"}>
              Settings
            </NavLink>
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
