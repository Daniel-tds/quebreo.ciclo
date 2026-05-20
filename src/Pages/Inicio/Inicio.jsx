import "./Inicio.css";
import CicloSVG from "./SVG/CicloSVG.jsx";
// ======================== SWIPER STYLES =========================
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from 'swiper/modules';
// Swiper (componentes)
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    leiPrincipal,
    estatisticas,
    canaisApoio,
    servicos
} from "./Data.js";
// React Bootstrap
import { Container, Card } from 'react-bootstrap';


export default function Inicio() {
    return (
        <>

        <section className="headerSection">
            <div className="headerContainer">
                    <h1 >
                        QUEBRE O CICLO DA <span style={{ color: "#603fad" }}>VIOLÊNCIA DOMÉSTICA</span>
                    </h1>
                    <p>Você não está sozinha! Juntas somos mais fortes.</p>

                <a href="tel:180" className="headerBtn">
                    Denuncie
                </a>
                </div>
        </section>



        <section className="introLei">
            <Container>
                    <div className="introConteudo">
                        <h2>Violência Doméstica</h2>
                        <p>
                            Violência doméstica é qualquer ação ou omissão baseada no gênero
                            que cause sofrimento físico, psicológico, sexual, moral ou patrimonial.
                            A Lei Maria da Penha reconhece essas práticas como crime e garante
                            proteção às mulheres.
                        </p>

                        <p>
                            Aqui, queremos que você leve consigo uma certeza:
                            <strong> a sua vida tem valor, a sua voz importa e você merece viver
                                com dignidade, respeito e segurança.</strong>
                        </p>

                        <p>
                            Dar o primeiro passo pode parecer difícil, mas é justamente esse
                            passo que pode abrir caminhos para uma nova realidade.
                        </p>
                    </div>
            </Container>
        </section>



        <section >
             <CicloSVG/>
        </section>



        <section className="estatisticasHome">
                <Container>
                    <div className="estatisticasGrid">
                        {estatisticas.map((item) => (
                            <div className="estatisticaItem" key={item.numero}>
                                <h3>{item.numero}</h3>
                                <p>{item.legenda}</p>
                            </div>
                        ))}
                    </div>
                </Container>
        </section>



            <section>
                <Container className="tipoViolencia py-5">
                    <h2>Tipos de Violência</h2>
                    <p className="subtituloTipoViolencia">
                        Identifique os principais tipos de violência
                    </p>
                    <Swiper
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2, spaceBetween: 10 },
                            992: { slidesPerView: 3, spaceBetween: 10 },
                            1200: { slidesPerView: 4, spaceBetween: 10 },
                        }}>
                        {servicos.map((item) => (
                            <SwiperSlide key={`${item.titulo}-${item.titulo2}`}>
                                <Card className="tiposViolenciaCard">
                                    <Card.Body className="tiposViolenciaBody">
                                        <div className="tiposViolenciaContainer">
                                            <Card.Title className="titleCard">
                                                <span>{item.titulo}</span>
                                                <span className="titulo2">{item.titulo2}</span>
                                            </Card.Title>
                                            <div className="descCard">
                                                {item.itens.map((desc) => (
                                                    <p key={desc}>• {desc}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>


            <section className="canaisApoio py-5" id="canais">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Canais de Apoio</h2>
                        <p className="subtituloTipoViolencia">
                            Procure ajuda. Você não está sozinha.
                        </p>
                    </div>

                    <div className="gridCanais">
                        {canaisApoio.map((canal) => (
                            <Card
                                key={canal.titulo}
                                className={`cardCanal ${canal.destaque ? "destaqueCanal" : ""}`}
                            >
                                <Card.Body>
                                    <h5>{canal.titulo}</h5>
                                    <p>{canal.descricao}</p>

                                    <a
                                        href={canal.link}
                                        className="btnCanal"
                                    >
                                        {canal.contato}
                                    </a>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>


            <section className="secaoLeiPrincipal" id="saibaMais">
                <Container>
                    <div className="leiConteudo">
                        <h2>{leiPrincipal.titulo}</h2>
                        <span>{leiPrincipal.numero}</span>

                        <p>{leiPrincipal.descricao}</p>

                        <a href={leiPrincipal.link} className="btnLei">
                            Saiba mais
                        </a>
                    </div>
                </Container>
            </section>


            <section className="mensagemFinal">
                <Container>
                    <div className="mensagemConteudo">
                        <h3>Você não está sozinha</h3>
                        <p>
                            A violência nunca é culpa de quem sofre.
                            Procurar ajuda é um ato de coragem.
                        </p>
                        <p>
                            Quando você se sentir pronta, existem pessoas e serviços
                            preparados para caminhar com você.
                        </p>
                    </div>
                </Container>
            </section>
    </>
    );
}
