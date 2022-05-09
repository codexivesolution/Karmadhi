import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";



const Header: React.FC = () => {



    return (
        <Container>
            <div className="w-100 position-relative">
                <Navbar className="fixed-custom-header ">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="./img/logo/mainLogo.png" alt="karmadhi logo" width={200} />
                        </Navbar.Brand>
                        <Nav className="me-auto KarmadhiHeader">
                            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#service" className="text-white">SERVICES</Nav.Link>
                            <Nav.Link href="#jobs" className="text-white">JOBS</Nav.Link>
                            <Nav.Link href="#team" className="text-white">TEAM</Nav.Link>
                            <Nav.Link href="#projects" className="text-white">PROJECTS</Nav.Link>
                            <Nav.Link href="#blog" className="text-white">BLOG</Nav.Link>
                            <Nav.Link href="#contact" className="text-white">CONTACT</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;

