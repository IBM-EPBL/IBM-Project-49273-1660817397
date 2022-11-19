import { Button, Card, Col, ListGroup, Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'




const Header=()=>{
    return(
        <div>
        <Navbar className="z-100 bg-light" id="navbar">
          <NavbarBrand >
            
          </NavbarBrand>
          <Nav className="mr-auto ">
            <NavLink to="/" end>
            <Button className="w-15 mx-5 color"> Home</Button>
            </NavLink>
          </Nav>
          <Nav className="mr-auto ">
            
            <NavLink to="/predict" end>
            <Button className="w-15 mx-5 color"> predict</Button>
               
            
            </NavLink>
          
            
          </Nav>
          <Nav className="mr-auto ">
            <NavLink to="/causes" end>
            <Button className="w-15 mx-5 color"> causes</Button>
            </NavLink>
          </Nav>
          
          
          <Nav className="mr-auto ">
            
            <NavLink to="/prevention" end>
            <Button className="w-15 mx-5 color"> Prevention</Button>
               
            
            </NavLink>
          
            
          </Nav>
          <Nav className="mr-auto w-100">
            
            <NavLink to="/treatment" end>
            <Button className="w-15 mx-5 color"> Treatment</Button>
               
            
            </NavLink>
            
          </Nav>
          
          <Button 
            
            className="w-15 mx-4" >
            Logout
          </Button>
        </Navbar>
        </div>
    )
}

export default Header
