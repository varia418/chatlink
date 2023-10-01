import styles from "./Registration.module.css";
import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';
import { Alert } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


function Registration() {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        const email = $("input[type='email']")[0].value;
        const name = $("input[type='text']")[0].value;
        const password = $("input[type='password']")[0].value;
        const confirmationPassword = $("input[type='password']")[1].value;

        const alertClassList = $("." + styles.alert)[0].classList;

        if (!alertClassList.contains(styles.hide)) {
            alertClassList.add(styles.hide)
        }

        if (password !== confirmationPassword) {
            alertClassList.remove(styles.hide);
            return;
        }

        try {
            const userId = uuidv4();
            const user = { userId, email, password, name }
            const response = await axios.post(process.env.REACT_APP_API_URL + "/account/register", user)
            if (response.status === 201) {
                setModalShow(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBar />
            <section id={styles.main}>
                <div className={styles.bubble}></div>
                <Modal
                    show={modalShow}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton onHide={() => setModalShow(false)}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Congratulations
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            You have signed up successfully.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => navigate("/login")}>Login</Button>
                    </Modal.Footer>
                </Modal>
                <Container className={styles.container}>
                    <Form onSubmit={handleSubmit}>
                        <h3>Create an account</h3>
                        <Alert className={styles.alert + " " + styles.hide} variant="danger">
                            The confirmation password does not match.
                        </Alert>
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
                            <Form.Label>Confirm password</Form.Label>
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