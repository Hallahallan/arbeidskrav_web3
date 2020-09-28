import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {employees, projects} from "../data";
import Modal from "react-bootstrap/Modal";
import {EmployeeList} from "../utilities";

export const Employees = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [employeeName, setEmployeeName] = useState("");
    const [positionName, setPositionName] = useState("");
    const handleSubmit = () => {
        employees.push(
            {
                name: employeeName,
                position: positionName,
                img: 'default.jpg'
            }
        );
        handleClose();
    };

    return (
        <container>
            <h1 className="mx-auto">Employees</h1>
            <Row className="mb-3 mx-auto">
                {employees.map((person, index) => (
                    <Card className="m-2" key={index} style={{width: '12rem'}}>
                        <Card.Img src={person.img} variant="top" className="border-bottom border-light" style={{objectFit: 'cover', height: '200px'}}/>
                        <Card.Body>
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Text>{person.position}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}

                <React.Fragment>
                    <Button variant="light" className="m-2" style={{width: '12rem', height: 'auto', minHeight: '18rem'}}
                            onClick={handleShow}>
                        <h1>+</h1>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create new Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="e">
                                    <Form.Label>Employees</Form.Label>
                                    <Form.Control type="text" value={employeeName}
                                                  onChange={(event => setEmployeeName(event.target.value))}
                                                  placeholder="Enter name of employee">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="form">
                                    <Form.Label>Project</Form.Label>
                                    <Form.Control type="text" value={positionName}
                                                  onChange={(event => setPositionName(event.target.value))}
                                                  placeholder="Enter position of employee"/>
                                </Form.Group>

                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Add Employee
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
            </Row>
        </container>
    )
}