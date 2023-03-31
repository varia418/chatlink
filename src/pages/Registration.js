import styles from "./Registration.module.css";
import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Registration() {
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
                        <h3>Create an account</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="lg" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" size="lg" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" size="lg" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicReTypePassword">
                            <Form.Label>Re-type password</Form.Label>
                            <Form.Control type="password" size="lg" placeholder="Re-type password" />
                        </Form.Group>

                        <Button className={styles.signUpButton} variant="primary" type="submit" size="lg">
                            Sign up
                        </Button>

                        <p>Already have an account? <Link to="/login">Login</Link></p>

                        <div className={styles.socialGroup}>
                            <p className={styles.lead}>Or sign up with </p>
                            <ButtonGroup className={styles.socialButtons}>
                                <button><Image src={require("../assets/google.png")} /></button>
                                <button><Image src={require("../assets/facebook.png")} /></button>
                                <button><Image src={require("../assets/reddit.png")} /></button>
                            </ButtonGroup>
                        </div>
                    </Form>
                </Container>
            </section>
        </>
    );
}

export default Registration;