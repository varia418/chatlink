import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from "./Login.module.css";
import { Alert, ButtonGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from "axios";
import ls from 'local-storage';
import { useNavigate } from "react-router-dom";
import { UseToken } from '../contexts/token';

function Login() {
    const navigate = useNavigate();
    const { setToken } = UseToken();

    async function handleSubmit(e) {
        e.preventDefault();
        const email = $("input[type='email']")[0].value;
        const password = $("input[type='password']")[0].value;
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + "/account/login", { email, password })
            if (response.status === 200) {
                ls("token", response.data);
                setToken(ls("token"));
                navigate("/app");
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                $("." + styles.alert)[0].classList.remove(styles.hide);
            }
        }
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
                        <Alert className={styles.alert + " " + styles.hide} variant="danger">
                            Invalid email or password.
                        </Alert>
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