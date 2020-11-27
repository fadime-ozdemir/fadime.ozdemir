import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import "./index.css";

const NavBar = () => {

    const links = [
        {link: "/", name:"HOME"},
        {link: "#projects", name:"PROJECTS"},
        {link: "#about", name:"ABOUT"},
        {link: "#contact", name:"CONTACT ME"}
    ]

    return (
        <Navbar expand="lg" className="navbar justify-content-center" sticky="top">
        {
            links.map(
                link=><Nav.Link href={link.link} key={link.name}>{link.name}</Nav.Link>
            )
        }
      </Navbar>
    );
}

export default NavBar;
