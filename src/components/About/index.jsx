import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";

const About = () => {
  return (
    <Container id="about" className="about pt-5 d-flex justify-content-center">
      <div className="d-flex flex-column pt-4 px-4">
        <h2 className="pb-1 title">About me</h2>
        <div className="aboutLinks d-flex align-items-end">
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1SYrZgHWTViKORDF4Nt68fRNKB7dXs4Su/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/fadimeozdemir/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/fadime-ozdemir"
            target="_blank"
          >
            GitHub
          </a>
          <a
            rel="noreferrer"
            href="https://www.behance.net/fadimeozdemir"
            target="_blank"
          >
            Behance
          </a>
        </div>
      </div>
      <div className="py-4">
        <p>
          I am a Front-end web developer with a passion for user experience.
          <br />
          I have been surrounded by videogames and stories since I was a kid, I
          enjoy to hear and live those stories and creating my own. When I was
          at high school decided to be a programmer. I discovered also the user
          experience and I want to learn both user experience and programming to
          create better stories and experiences for services and application.
          After graduating from high school, I did different jobs because I was
          the only one in my family who could economically sustain us.
          <br />
          Thanks to my background as a babysitter and cleaning woman, I bring
          strong skills in communication. During my time as a factory worker, I
          discovered to be a determined person as I learned to sew during breaks
          and promoted to sewer later.
          <br />
          When I had the change I left my job and start this amazing journey.
          Because I wanted to turn my ideas into real projects and being able to
          build cool websites, I started to study web development as
          self-taught. After I was selected as one of the 26 students among more
          than 450 people in the
          <a rel="noreferrer" href="https://www.re-coded.com/" target="_blank">
            &nbsp;Re:coded&nbsp;
          </a>
          front-end development bootcamp in partnership with
          <a
            rel="noreferrer"
            href="https://flatironschool.com/"
            target="_blank"
          >
            &nbsp;Flatiron School
          </a>
          .<br />
          Here I learned and improved my web development skills such as HTML5
          and CSS3, javascript and JS ES6, React, Redux and firebase, but also
          soft skills such as team working and time management.
          <br />I am patience, solution-oriented, ambitious, fast learner and
          open-minded person. I enjoy teamwork, coding, user experience and
          design.
        </p>
        <p>
          What I can use to <span className="skills">program</span>: HTML5,
          CSS3, SASS, Bootstrap, MaterialUI, Javascript, React, Redux and
          Firebase.
          <br />
          What I can use to <span className="skills">design</span>: Figma,
          Photoshop, Illustrator and Indesign.
        </p>
      </div>
    </Container>
  );
};

export default About;
