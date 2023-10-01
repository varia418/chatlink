import styles from './CreateConversationModal.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import $ from 'jquery';
import { Autocomplete, TextField, Chip } from '@mui/material';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function CreateConversationModal(props) {
    const [emails, setEmails] = useState([])
    useEffect(() => {
        async function fetchEmails() {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/user")
            setEmails(response.data)
        }

        fetchEmails();
    }, []);

    async function createConversation(e) {
        e.preventDefault();
        const id = uuidv4();
        const title = $("input[type='text']")[0].value;
        const members = Array.from($(".MuiChip-label")).map(span => span.innerText);

        const conversation = {
            title,
            members
        }

        const response = await axios.post(process.env.REACT_APP_API_URL + "/conversation", {})
    }

    return (
        <Modal
            show={true}
            className={styles.createConversationModal}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New conversation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id={styles.newConversationForm} onSubmit={createConversation} >
                    {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Conversation title"
                            className="mb-3"
                        >
                            <Form.Control className={styles.titleInput} type="text" placeholder="Group 1" />
                        </FloatingLabel>
                    </Form.Group> */}
                    <TextField
                        id="outlined-basic"
                        className={styles.titleInput}
                        label="Conversation title"
                        variant="outlined"
                        fullWidth
                        margin="normal" />
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={emails}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Members"
                                placeholder="Enter email"
                            />
                        )}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button id={styles.createButton} onClick={createConversation}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateConversationModal;