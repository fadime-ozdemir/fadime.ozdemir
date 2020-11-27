import React from 'react';
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;
