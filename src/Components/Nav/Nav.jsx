import './Nav.css'
// IMAGENS
import logo from '../../assets/Icon&logo/logo.png'
import toggleAbrir from '../../assets/Icon&logo/toggle.png'
import toggleFechar from  '../../assets/Icon&logo/fechar.png'
// REACT
import { NavLink } from "react-router-dom";
import { useState } from "react";
// BOOTSTRAP
import {Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <section>
                <div className="d-flex justify-content-center Nav01 gap-4">
                    {/* Link 180 */}
                    <a href="tel:180" aria-label="Central de Atendimento à Mulher 180">
                        <span className="d-inline d-md-none">Ligue 180</span> {/* texto mobile */}
                        <span className="d-none d-md-inline">Central de Atendimento à Mulher 180</span> {/* texto desktop */}
                    </a>

                    {/* Link 197 */}
                    <a href="tel:197" aria-label="Disque Denuncia 197">
                        <span className="d-inline d-md-none">Ligue 197</span>
                        <span className="d-none d-md-inline">Disque Denúncia 197</span>
                    </a>

                    <a href="#" aria-label="Atendimento gratuito vinte e quatro horas">
                        <span className="d-inline d-md-none">Atend. 24h</span>
                        <span className="d-none d-md-inline">Atendimento 24h Gratuito</span>
                    </a>
                </div>
            </section>


            <Navbar expand="lg" className="navigation">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: "4.5rem", width: "auto" }}
                            className="ms-4 ms-md-0"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setOpen(!open)} aria-controls="basic-navbar-nav" className="btn_toggle">
                        <img
                            src={open ? toggleFechar : toggleAbrir}
                            alt="menu"
                            className="toggle-icon"
                        />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center mb-4 mb-md-0">
                            <Nav.Link as={NavLink} to="/" className="px-4 nav_link">
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/canais-de-denuncia" className="px-4 nav_link">
                                Canais de Denúncia
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/apos-a-denuncia" className="px-4 nav_link">
                                Após a Denúncia
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/apoio-e-direitos" className="px-4 nav_link">
                                Apoio e Direitos
                            </Nav.Link>
                        </Nav>
                        <a href={"tel:180"} target="_blank" className="btnDenuncia">
                            Denuncie
                        </a>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;