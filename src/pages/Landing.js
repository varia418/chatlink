import styles from "./Landing.module.css";
import NavBar from "../components/NavBar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <NavBar />
            <section id={styles.main}>
                <div className={styles.bubble}></div>
                <img id={styles.textingIllustration} src={require("../assets/texting-concept-illustration.png")} alt="" />

                <Card id={styles.card}>
                    <Card.Body>
                        <Card.Title className={styles.title}>IMAGINE A PLACE ...</Card.Title>
                        <Card.Text className={styles.text}>
                            Where just you and a handful of friends can spend time together.
                            A place that makes it easy to talk every day and hang out more often.
                        </Card.Text>
                        <Button className={styles.joinBtn} variant="primary" size="lg"><Link to="/register">Join now</Link></Button>
                        <Button className={styles.discoverBtn} variant="outline-primary" size="lg"><Link to="/discover">Discover</Link></Button>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
}

export default Landing;