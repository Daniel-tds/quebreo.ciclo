//BOOTSTRAP
import {Col, Container, Row} from "react-bootstrap";
//PAGINA
import "./Footer.css";
//IMAGEM
import logoBranca from "../../assets/Icon&logo/logoBranca.png";
import unibarretoLogo from "../../assets/Icon&logo/unibarretos1.png";
//REACT
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="py-5 align-items-center justify-content-center gap-2">

                    <Col xs={12} md={4} lg={6} xl={3} className="order-2 order-md-1">
                        <NavLink to="/" aria-label="Página inicial">
                            <img src={logoBranca} className="logoBranca" alt="Quebre o Ciclo" />
                        </NavLink>
                    </Col>

                    <Col xs={12} md={7} lg={6} xl={5} className="d-flex flex-column justify-content-center gap-2 order-1 order-md-2 mb-3 mb-md-0">
                        <NavLink to="/canais-de-denuncia" className="footer-link">
                            Canais de Denuncia
                        </NavLink>
                        <NavLink to="/" className="footer-link">
                            Não Tenha Medo
                        </NavLink>
                        <NavLink to="/" className="footer-link">
                            Sobre
                        </NavLink>
                    </Col>

                    <Col xs={12} md={6} lg={5} xl={3} className="order-2 order-md-3">
                        <img src={unibarretoLogo} style={{ height: "3rem" }} alt="Unibarretos" />
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
