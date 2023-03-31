import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./Login.module.css";
import { ButtonGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <>
            <NavBar />
            <section id={styles.main}>
                <div className={styles.bubble}></div>
                <Container className={styles.container}>
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.socialGroup}>
                            <h3 className={styles.lead}>Sign in with </h3>
                            <ButtonGroup className={styles.socialButtons}>
                                <button><Image src={require("../assets/google.png")} /></button>
                                <button><Image src={require("../assets/facebook.png")} /></button>
                                <button><Image src={require("../assets/reddit.png")} /></button>
                            </ButtonGroup>
                        </div>

                        <div className={styles.divider}>
                            <p>Or</p>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="lg" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" size="lg" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button className={styles.loginButton} variant="primary" type="submit">
                            Login
                        </Button>

                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </Form>
                </Container>
            </section>
        </>
    );
}

export default Login;