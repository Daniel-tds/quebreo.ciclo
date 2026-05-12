import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './Apos-a-denuncia.css';

function AposADenuncia() {
  const procedimentos = [
    {
      id: "0",
      titulo: "4.1 Medidas protetivas de urgência",
      conteudo: "Podem ser solicitadas: afastamento do agressor da casa, proibição de contato (mensagens, ligações, redes sociais), proibição de aproximação, suspensão do porte de armas e ajuda financeira (alimentos provisórios).",
      extra: "Nota: Podem ser concedidas mesmo sem ouvir o agressor antes, se houver risco à integridade da vítima."
    },
    {
      id: "1",
      titulo: "4.2 Apoio jurídico",
      conteudo: "Direito a advogado(a) ou atendimento pela Defensoria Pública - atendimento humanizado e especializado."
    },
    {
      id: "2",
      titulo: "4.3 Você não estará sozinha – Equipe multidisciplinar",
      conteudo: "Psicólogos, assistentes sociais e profissionais da saúde oferecem orientação, acolhimento e acompanhamento constante durante o processo."
    },
    {
      id: "3",
      titulo: "4.4 Você será informada sobre tudo - Direito à informação",
      conteudo: "A vítima tem o direito de ser avisada sobre o andamento do processo, decisões do juiz e entrada ou saída do agressor da prisão.",
      extra: "Atenção: Não se deve entregar nenhuma intimação ao agressor."
    },
    {
      id: "4",
      titulo: "4.5 Prisão do agressor",
      conteudo: "Em situações graves, o juiz pode determinar a prisão preventiva para garantir o cumprimento das medidas protetivas."
    },
    {
      id: "5",
      titulo: "4.6 Desistência da denúncia",
      conteudo: "Só pode ocorrer diante do juiz, em audiência específica, antes do recebimento da denúncia e com participação do Ministério Público."
    },
    {
      id: "6",
      titulo: "4.7 Rigor da Lei",
      conteudo: "A lei não permite punições leves como pagamento de cesta básica ou multa isolada."
    }
  ];

  return (
    <>
      <section className="headerSection">
        <Container className="headerContainer">
          <h1>
            COMO PROCEDER <span style={{ color: "#603fad" }}>APÓS A DENÚNCIA</span>
          </h1>
          <p>Clique nos tópicos abaixo para entender cada etapa do seu processo de proteção.</p>
        </Container>
      </section>

      <section className="py-5">
        {/* Adicionado a classe container do accordion */}
        <Container className="accordion-container">
          <div className="introConteudo text-center mb-5">
            <h2>Próximos Passos</h2>
            <p>
              Após o registro da ocorrência, o caso segue para o juiz em até <strong>48 horas</strong>.
              Veja seus direitos abaixo:
            </p>
          </div>

          {/* ACCORDION COM CLASSES CUSTOMIZADAS */}
          <Accordion flush>
            {procedimentos.map((item) => (
              <Accordion.Item
                eventKey={item.id}
                key={item.id}
                className="accordion-item-custom"
              >
                <Accordion.Header className="accordion-header-custom">
                  {item.titulo}
                </Accordion.Header>

                <Accordion.Body>
                  <div className="accordion-text">
                    <p>{item.conteudo}</p>
                    {item.extra && (
                      <div className="accordion-extra">
                        {item.extra}
                      </div>
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="text-center mt-5">
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
              target="_blank"
              rel="noreferrer"
              className="headerBtn"
            >
              Saiba Mais
            </a>
          </div>
        </Container>
      </section>

      <section className="mensagemFinal">
        <Container>
          <div className="mensagemConteudo">
            <h3>Sua voz é sua força</h3>
            <p>Continue acompanhando seu processo e utilize os canais de apoio sempre que precisar.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AposADenuncia;
