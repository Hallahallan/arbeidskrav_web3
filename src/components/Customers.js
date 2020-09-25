import Table from "react-bootstrap/Table";
import React from "react";

export const Customers = () => {
    return (
        <container>
            <h1 className="mx-auto">Customers</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Company name</th>
                    <th>Project name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Googloo</td>
                    <td>Fix Mainframe</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Microosooft</td>
                    <td>Fix folder system</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Yoohoo</td>
                    <td>Divide by 0</td>
                </tr>
                </tbody>
            </Table>
        </container>
    )
}