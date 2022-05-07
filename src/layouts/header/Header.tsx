import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";



const Header: React.FC = () => {



    return (
        <Container>
            <div className="w-100 position-relative">
                <Navbar className="fixed-custom-header ">
                    <Container>
                        <Navbar.Brand href="#home"><img src="./img/logo/mainLogo.png" alt="karmadhi logo" width={200} /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#features" className="text-white">Features</Nav.Link>
                            <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;

