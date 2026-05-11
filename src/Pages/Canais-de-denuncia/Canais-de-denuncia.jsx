import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Canais-de-denuncia.css";
import { canaisUrgencia, canaisPresenciais, canaisDigitais } from "./Canais-de-denuncia-Data.js";

export default function CanaisDeDenuncia() {
    return (
        <>
            {/* ── HEADER ── */}
            <section className="headerSection">
                <div className="headerContainer">
                    <h1>CANAIS DE DENÚNCIA</h1>
                    <p>Conheça os órgãos, aplicativos e serviços disponíveis para te proteger.</p>
                </div>
            </section>

            {/* ── URGÊNCIA E EMERGÊNCIA ── */}
            <section className="canaisApoio py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Urgência e Emergência</h2>
                        <p className="subtituloTipoViolencia">
                            Canais diretos para quando a agressão estiver acontecendo ou houver risco imediato.
                        </p>
                    </div>

                    <div className="gridCanais">
                        {canaisUrgencia.map((canal, index) => (
                            <Card key={index} className="cardCanal destaqueCanal">
                                <Card.Body className="d-flex flex-column">
                                    <h5 className="numeroUrgencia">{canal.numero}</h5>
                                    <h5 className="tituloUrgencia">{canal.titulo}</h5>
                                    <div style={{ textAlign: "left", flexGrow: 1 }}>
                                        {canal.itens.map((item, i) => (
                                            <p key={i}>
                                                {item.rotulo && <strong>{item.rotulo}: </strong>}
                                                {item.texto}
                                            </p>
                                        ))}
                                    </div>
                                    <a href={canal.link} className="btnCanal mt-4">{canal.linkTexto}</a>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── ATENDIMENTO PRESENCIAL ── */}
            <section className="introLei py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Atendimento em Barretos/SP</h2>
                        <p className="subtituloTipoViolencia">
                            Órgãos físicos especializados em acolhimento e assistência.
                        </p>
                    </div>

                    <div className="gridCanais">
                        {canaisPresenciais.map((canal, index) => (
                            <Card key={index} className="cardCanal">
                                <Card.Body>
                                    <h5>{canal.titulo}</h5>
                                    <span className="infoSecundaria">{canal.telefone}</span>
                                    <div className="cardTexto">
                                        <p><strong>Endereço:</strong> {canal.endereco}</p>
                                        <p><strong>Atendimento:</strong> {canal.atendimento}</p>
                                        <p>{canal.descricao}</p>
                                        {canal.complemento && <p>{canal.complemento}</p>}
                                        {canal.observacao && (
                                            <p className="observacao">{canal.observacao}</p>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── CANAIS DIGITAIS ── */}
            <section className="canaisApoio py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Canais Digitais, Aplicativos e Outros</h2>
                        <p className="subtituloTipoViolencia">
                            Ferramentas online e aplicativos gratuitos para registrar ocorrências,
                            acionar ajuda com rapidez e acessar serviços de proteção.
                        </p>
                    </div>

                    <div className="gridCanais">
                        {canaisDigitais.map((canal, index) => (
                            <Card key={index} className="cardCanal">
                                <Card.Body>
                                    <h5>{canal.titulo}</h5>
                                    <div className="cardTexto">
                                        <p>{canal.descricao}</p>
                                        {canal.complemento && <p>{canal.complemento}</p>}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}