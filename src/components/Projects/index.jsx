import React from 'react';
import code from "./images/monitor.svg";
import live from "./images/live-streaming.svg";
import { Card } from "react-bootstrap";
import projectsList from "./projects";
import "./index.css";

const Projects = () => {
        
    return (
        <div id="projects" className="d-flex justify-content-center flex-wrap m-5 p-3">
            {
                projectsList.map(
                    project=> <Card style={{ width: '23rem' }} className="m-3" key={project.name}>
                    <Card.Img variant="top" src={project.image} alt="project Screenshot" className="cardImg img-fluid"/>
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>
                      {project.description}<br />
                      Done with: {project.stack}.    
                      </Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-around mx-5 my-3 px-3">
                      <Card.Link href={project.github}  rel="noreferrer" target="_blank"><img src={code} alt="github link" className="projectImgLink"/> Source code</Card.Link>
                      <Card.Link href={project.live} rel="noreferrer" target="_blank"><img src={live} alt="live demo link" className="projectImgLink"/> Demo</Card.Link>
                      </div>
                  </Card>
                )
            }
        </div>
    );
}

export default Projects;
