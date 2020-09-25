import {employees} from "../data";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React from "react";
import {projects} from "../data";

export const Projects = () => {
    return (
        <container>
            <h1 className="mx-auto">Projects</h1>

            <Row className="mb-3 mx-auto">
                {projects.map(p => (
                    <Card className="m-2" style={{width: '12rem'}}>
                        <Card.Img src={p.pImg} variant="top" style={{objectFit: 'cover', height: '200px'}}/>
                        <Card.Body>
                            <Card.Title>{p.pName}</Card.Title>
                            <Card.Text>{p.pDesc}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </container>
    )
}