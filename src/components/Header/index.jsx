import React from 'react';
import image from "./www.freepik.com-www.flaticon.com.png";
import {Button, Container} from "react-bootstrap";
import "./index.css";

const Header = () => {
    return (
        <Container className="d-flex justify-content-around align-items-center flex-wrap pt-5" id="home">
            <div className="intro">
                <h1>FADIME ÖZDEMIR</h1>
                <p>Front-end web developer with passion for user experience.<br/>
                I want to create products which are both efficiently coded and valuable for the people.
                </p>
                <Button href="#projects" className="introWork mr-4 shadow-none">Works</Button>
                <Button variant="danger" href="#contact" className="shadow-none">Hire Me</Button>
            </div>
            <img src={image} className="img-fluid" alt="hero" />
        </Container>
    );
}

export default Header;