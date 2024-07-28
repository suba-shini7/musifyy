import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../src/assests/logo.png'
import { Link } from 'react-router-dom';
export const NavBar = ({searchField,setSearchField,searchClear}) => {
  
  return (
  
     <Navbar expand="lg" className=" navbar-dark nav-background sticky-top ">
      <Container fluid >
        <Navbar.Brand href="#" ><img src={logo} width={100} height={100} >
        </img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 textcolor "
            style={{ maxHeight: '150px' }}
            navbarScroll 
          >
           <Link to='/' className='Linkstyle'> <Nav.Link href="#action1" className='textcolor'>Home</Nav.Link></Link> 
           <Link to='recentlyplayed'  className='Linkstyle'><Nav.Link href="#action2">Recently Played</Nav.Link></Link> 
            <Link to='mywishtlist'  className='Linkstyle'><Nav.Link href="#action3"> My Wishtlist</Nav.Link></Link>
            <Nav.Link href='#action5' ><i class="bi bi-moon-stars-fill"></i></Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setSearchField(e.target.value) }  
              value={searchField}
            />
            <Button className='nav-button' onClick={searchClear} ><i class="bi bi-search-heart"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
