import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./NavBar.module.css";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar id={styles.navBar} variant="light" fixed="top" style={{ backgroundColor: "#D7FBE8" }} >
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img
                                alt=""
                                src={require("../assets/chatlink-logo.png")}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <Navbar.Text className={styles.title}>Chat Link</Navbar.Text>
                        </NavLink>
                    </Navbar.Brand>

                    <Nav id={styles.nav} defaultActiveKey="/" as="ul">
                        <Nav.Item as="li">
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/features">Features</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/discover">Discover</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/support">Support</Link>
                        </Nav.Item>
                    </Nav>

                    <ButtonGroup className={styles.authBtnGroup}>
                        <Button className={styles.loginBtn} variant="outline-primary"><Link to="/login">Login</Link></Button>
                        <Button className={styles.registerBtn} variant="primary"><Link to="/register">Register</Link></Button>
                    </ButtonGroup>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;