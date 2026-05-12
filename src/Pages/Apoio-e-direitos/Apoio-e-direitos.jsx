import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab, Card } from 'react-bootstrap';
import './Apoio-e-direitos.css';

const dadosMecanismos = [
  { t: "Negação", d: "Consiste na recusa inconsciente em admitir a realidade da violência vivenciada. Ela atua como mecanismo de autoproteção psíquica, pois reconhecer plenamente a violência implicaria enfrentar o medo, a ruptura do vínculo afetivo e, muitas vezes, a insegurança financeira e social." },
  { t: "Minimização", d: "Ocorre quando a vítima reconhece o fato, mas reduz sua gravidade. Esse mecanismo permite que a mulher preserve a imagem do agressor e mantenha a estabilidade emocional momentânea, evitando o colapso psíquico diante da repetição da violência." },
  { t: "Racionalização", d: "Consiste na tentativa de justificar o comportamento do agressor com explicações aparentemente lógicas. Esse mecanismo desloca a responsabilidade do agressor para fatores externos, reduzindo o conflito interno da vítima e mantendo o vínculo afetivo." },
  { t: "Dissociação", d: "Em situações de violência intensa ou prolongada, pode ocorrer dissociação psíquica, caracterizada por sensação de distanciamento emocional do próprio corpo ou dos acontecimentos." },
  { t: "Vínculo Traumático", d: "A alternância entre agressão e períodos de afeto cria um vínculo onde a mulher associa alívio e carinho ao próprio agressor, dificultando o rompimento do ciclo." }
];

function ApoioEDireitos() {
  const [mecanismoAtivo, setMecanismoAtivo] = useState(0);

  return (
    <>
      <section className="headerSection">
        <div className="headerContainer">
          <h1>APOIO E <span style={{ color: "#603fad" }}> DIREITOS</span></h1>
          <p>Denunciar a violência doméstica é um passo difícil, mas é o começo de uma nova vida.</p>
        </div>
      </section>

      {/* SEÇÃO DE CONTEÚDO TÉCNICO (ABAS) */}
      <section className="py-5">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="auxilio">
            <Row>
              <Col lg={4} className="mb-4">
                <ListGroup className="custom-list-group">
                  <ListGroup.Item action eventKey="auxilio">1 Auxílio Aluguel (SP)</ListGroup.Item>
                  <ListGroup.Item action eventKey="indenizacao">2 Indenização Maria da Penha</ListGroup.Item>
                  <ListGroup.Item action eventKey="defensoria">3 Defensoria Pública</ListGroup.Item>
                  <ListGroup.Item action eventKey="guarda">4 Guarda dos Filhos</ListGroup.Item>
                  <ListGroup.Item action eventKey="psicologia">5 Apoio Psicológico</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={8}>
                <Tab.Content className="content-area  p-4 shadow-sm  " style={{ borderRadius: '15px', border: '2px solid #603fad' }}>
                  {/* 5.1 Auxílio Aluguel */}
                  <Tab.Pane eventKey="auxilio">
                    <h3>Auxílio Aluguel</h3>
                    <p>R$ 500,00 por seis meses (renovável)</p>
                    <p>Destinado a mulheres com medida protetiva residentes em São Paulo, em situação de vulnerabilidade e
                      com renda familiar anterior à separação de até dois salários-mínimos.</p>
                    <div className="documentos-box">
                      <h6>Documentos Necessários:</h6>
                      <ul>
                        <li>Renda familiar anterior à separação (holerite, extrato bancário ou CadÚnico atualizado);</li>
                        <li>Medida protetiva expedida e vigente (Lei Maria da Penha);</li>
                        <li>Comprovante de domicílio no Estado de São Paulo;</li>
                        <li>Relatório psicossocial ou documento que comprove vulnerabilidade.</li>
                      </ul>
                    </div>
                  </Tab.Pane>

                  {/* 5.2 Indenização */}
                  <Tab.Pane eventKey="indenizacao">
                    <h3>Indenização Maria da Penha</h3>
                    <p>Direito a indenização por <strong>danos morais</strong> (dano presumido).</p>
                    <div className="documentos-box">
                      O dano à honra e o abalo emocional são presumidos quando comprovada a violência, fixada pelo juiz na esfera penal sem necessidade de provas extras.
                    </div>
                  </Tab.Pane>

                  {/* 5.3 Defensoria */}
                  <Tab.Pane eventKey="defensoria">
                    <h3>Defensoria Pública</h3>
                    <p>Assistência jurídica integral e gratuita. Atendimento prioritário e humanizado.</p>
                    <div className="documentos-box">
                      <h6>Documentos geralmente solicitados</h6>
                      <ul>
                        <li>Pessoais: RG, CPF, comprovante de residência, certidão de nascimento/casamento, certidão de nascimento dos filhos;</li>
                        <li>Provas da violência: Boletim de Ocorrência, medida protetiva, laudos médicos, fotos, prints de mensagens;</li>
                        <li>Comprovação de renda: carteira de trabalho, contracheque ou benefício do INSS.</li>
                      </ul>
                    </div>
                  </Tab.Pane>

                  {/* 5.4 Guarda */}
                  <Tab.Pane eventKey="guarda">
                    <h3>Guarda dos Filhos</h3>
                    <p>A <strong>guarda unilateral</strong> pode ser concedida quando há medida protetiva contra um dos genitores, priorizando o melhor
                      interesse da criança. Ela não é automática, exigindo ação judicial, provas da violência (BO, mensagens) e parecer do Ministério Público.</p>
                    <p>Como conseguir: É necessário entrar com uma ação de guarda, preferencialmente com um pedido liminar, apresentando provas como boletins de ocorrência, inquéritos e a medida protetiva.</p>
                    <div className="documentos-box">
                      Observação: A violência doméstica e familiar é um forte argumento para a concessão da guarda unilateral, justificando a exceção à regra da guarda compartilhada. No entanto, a medida protetiva em favor da mãe não impede automaticamente as visitas do pai, que podem ser regulamentadas ou suspensas para garantir a segurança da criança.
                    </div>
                  </Tab.Pane>
                  {/* 5.5 Apoio Psicológico  */}
                  <Tab.Pane eventKey="psicologia">
                    <h3>Assistência Psicológica</h3>
                    <p>Direito assegurado por lei. A violência doméstica causa impactos profundos, não apenas no corpo da mulher, mas também na sua estrutura emocional.</p>
                    <div className="documentos-box">
                      <h6>Entre os efeitos mais recorrentes estão:</h6>
                      <ul>
                        <li>Transtornos de ansiedade;</li>
                        <li>Depressão;</li>
                        <li>Transtorno de Estresse Pós-Traumático (TEPT);</li>
                        <li>Síndrome do pânico;</li>
                        <li>Baixa autoestima;</li>
                        <li>Sentimento de culpa e vergonha;</li>
                        <li>Isolamento social;</li>
                        <li>Dependência emocional.</li>
                      </ul>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      {/* DASHBOARD POSICIONADO ACIMA DA REDE DE APOIO COM ESTILO INLINE */}
      <section className="dashboard-mecanismos py-5">
        <Container>
          <h2 className="text-center mb-5" style={{ color: '#603fad', fontWeight: '700' }}>Entenda os Mecanismos de Defesa</h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* Círculos */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {dadosMecanismos.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setMecanismoAtivo(i)}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid #603fad',
                    backgroundColor: mecanismoAtivo === i ? '#603fad' : 'white',
                    color: mecanismoAtivo === i ? 'white' : '#603fad',
                    fontWeight: 'bold',
                    transition: '0.3s'
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Painel de Texto */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              maxWidth: '700px',
              width: '100%',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#603fad', marginBottom: '15px' }}>{dadosMecanismos[mecanismoAtivo].t}</h4>
              <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>{dadosMecanismos[mecanismoAtivo].d}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* REDE DE APOIO LOCAL */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2>Rede de Apoio</h2>
            <p className="subtituloTipoViolencia">Onde encontrar ajuda especializada</p>
          </div>
          <div className="gridCanais">
            <Card className="cardCanal">
              <Card.Body>
                <h5>CRAS / CREAS</h5>
                <p>Inclusão em programas sociais e autonomia financeira.</p>
                <a href="https://share.google/naIqiXLYWHiKTS6bV" target="_blank" rel="noreferrer" className="headerBtn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Clique aqui para acessar
                </a>
              </Card.Body>
            </Card>
            <Card className="cardCanal">
              <Card.Body>
                <h5>Casa da Mulher (Barretos)</h5>
                <p>Acolhimento e capacitação profissional.</p>
                <a href="https://share.google/PA0Dcg8uWVdoP5aHR" target="_blank" rel="noreferrer" className="headerBtn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Clique aqui para acessar
                </a>
              </Card.Body>
            </Card>
            <Card className="cardCanal">
              <Card.Body>
                <h5>UBS / CAPS</h5>
                <p>Acompanhamento psicológico pelo SUS.</p>
                <a href="https://share.google/QREV4DL3B6dJ8RkCD" target="_blank" rel="noreferrer" className="headerBtn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Clique aqui para acessar
                </a>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ApoioEDireitos;
