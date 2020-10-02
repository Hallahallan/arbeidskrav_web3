import {Card} from "react-bootstrap";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ProjectModals = (props) => {
    console.log(props)
    return (
        <Modal show={props.open} onHide={props.handleProject}>
            <Modal.Header closeButton>
                <Modal.Title>{props.projectName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.projectImg} style={{objectFit: 'cover', width: '100%'}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleProject}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}