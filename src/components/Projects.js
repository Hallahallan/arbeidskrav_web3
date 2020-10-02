import {employees} from "../data";
import {Card, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React, {useState} from "react";
import {projects} from "../data";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import {EmployeeList} from "../utilities";
import {ProjectModals} from "./ProjectModals";

export const Projects = () => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [employeeName, setEmployeeName] = useState(employees[0].name);
    const [projectName, setProjectName] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleProject = () => setShowProject(!showProject);
    const handleSubmit = () => {
        projects.push(
            {
                name: projectName,
                status: true,
                img: `p${Math.floor(Math.random() * 8) + 1}.jpg`
            }
        );
        handleClose();
    };

    return (
        <Container>
            <ProjectModals open={showProject} handleProject={handleProject} projectName={projects[index].name} projectImg={projects[index].img}/>
            <h1 className="mx-auto">Projects</h1>

            <Row className="mb-3 mx-auto">
                {projects.map((p, index) => (
                    <Card className="m-2" key={index} style={{width: '12rem'}} onClick={ () => {setIndex(index); handleProject()} }>
                        <Card.Img src={p.img} variant="top" className="border-bottom border-light" style={{objectFit: 'cover', height: '200px'}}/>
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                        </Card.Body>
                        <Card.Footer variant="bottom" style={{objectFit: 'cover'}}>
                            <Card.Text
                                className={p.status ? 'text-success' : 'text-danger'}>{p.status ? 'Active' : 'Not active'}</Card.Text>
                        </Card.Footer>
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
                                <Form.Group controlId="form">
                                    <Form.Label>Project</Form.Label>
                                    <Form.Control type="text" value={projectName}
                                                  onChange={(event => setProjectName(event.target.value))}
                                                  placeholder="Enter name of project"/>
                                </Form.Group>
                                <Form.Group controlId="e">
                                    <Form.Label>Employees</Form.Label>
                                    <Form.Control as="select" value={employeeName}
                                                  onChange={(event => setEmployeeName(event.target.value))}>
                                        {EmployeeList(employees)}
                                    </Form.Control>
                                </Form.Group>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Add Project
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
            </Row>
        </Container>
    )
}