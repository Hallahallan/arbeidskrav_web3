import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import {Home} from './components/Home';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import {Projects} from "./components/Projects";
import {Employees} from "./components/Employees";
import {Customers} from "./components/Customers";


function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar bg="light">
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Brand href="Projects">Projects</Navbar.Brand>
                    <Navbar.Brand href="Employees">Employees</Navbar.Brand>
                    <Navbar.Brand href="Customers">Customers</Navbar.Brand>
                </Navbar>
                <Container className="container pt-5">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/projects" component={Projects}></Route>
                        <Route exact path="/employees" component={Employees}></Route>
                        <Route exact path="/customers" component={Customers}></Route>
                    </Switch>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
