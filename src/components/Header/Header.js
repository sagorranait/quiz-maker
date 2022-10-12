import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import './Header.css'

const Header = () => {
  let location = useLocation();
  let { quizId } = useParams();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='py-2'>
      <Container>
        <Navbar.Brand>
            <Link to='/'>
              <img alt="logo" src="../images/logo.png" width="30" height="30" className="d-inline-block align-top"/>
              <span className='ps-2 fw-bold'>QuizMaker</span>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
                className={`nav-links px-3 py-3 text-decoration-none text-white ${({isActive})=> isActive ? 'active': ''} ${(location.pathname === `/quizzes/${quizId}`) ? 'active': ''}`} 
                to='/'
                end
            >
                Subjects
            </NavLink>
            <NavLink 
                className={`nav-links px-3 py-3 text-decoration-none text-white ${({isActive})=> isActive ? 'active': ''}`} 
                to='/faq'
            >
                FAQ
            </NavLink>
            <NavLink 
                className={`nav-links px-3 py-3 text-decoration-none text-white ${({isActive})=> isActive ? 'active': ''}`} 
                to='/analytics'
            >
                Analytics
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header