import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {employees} from "../data";
import Modal from "react-bootstrap/Modal";

export const Employees = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <container>
            <h1 className="mx-auto">Employees</h1>
            <Row className="mb-3 mx-auto">
                {employees.map(person => (
                    <Card className="m-2" style={{width: '12rem'}}>
                        <Card.Img src={person.image} variant="top" style={{objectFit: 'cover', height: '200px'}}/>
                        <Card.Body>
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Text>{person.position}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}

                <React.Fragment>
                    <Button variant="light" className="m-2" style={{width: '12rem', height: '18rem'}}
                            onClick={handleShow}>
                        <h1>+</h1>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new Employee</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formNewEmployee">
                                    <Form.Label id="formEmployeeName">Employee Name</Form.Label>
                                    <Form.Control type="text" placeholder="..."/>
                                </Form.Group>
                                <Form.Group controlId="formNewPosition">
                                    <Form.Label id="formPositionName">Employee Position</Form.Label>
                                    <Form.Control type="text" placeholder="..."/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Add Employee
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
            </Row>
        </container>
    )
}