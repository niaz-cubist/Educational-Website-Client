import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/Context.js';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Panda from '../../Images/Screenshot_1.png'
import './Header.css'


const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='nav-web' to="/home">Edu Learn</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto mx-auto">
                            <Link className='header mx-2' to="/home">Home</Link>
                            <Link className='header mx-2' to="/courses">Courses</Link>
                            <Link className='header mx-2' to="/faq">FAQ</Link>
                            <Link className='header mx-2' to="/blog">Blog</Link>
                            <Link className='header mx-2' to="/checkout">Get Premium Access</Link>
                        </Nav>

                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='nav-link px-2' to="/login">Login</Link>
                                            <Link className='nav-link px-2' to="/register">Register</Link>
                                        </>
                                }
                            </>
                            <>
                                {user?.uid ?
                                    <Image
                                        className='mt-1 px-2 disabled'
                                        style={{ height: '35px' }}
                                        roundedCircle
                                        src={Panda}>
                                    </Image>
                                    : <></>
                                }
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;