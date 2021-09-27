import React, {useState} from 'react';
import {Form, FormControl, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = ({setSearch, user}) => {

    return (
        <header >
            <Navbar bg="light" expand="lg" className="px-5">
                <Link to="/" >
                    <img
                        style={{width: "60px", height: "60px", objectFit: "cover", borderRadius: "50%"}}
                        src={user.avatar_url} width={50} alt=""/>
                    <Navbar.Brand href="#" className="ms-3" style={{textDecoration: "none"}}>{user.login}</Navbar.Brand>
                </Link>

                <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
                    <Form className="d-flex ">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {/*<input type="text"  onKeyPress={handlePress}/>*/}
        </header>
    );
};

export default Header;