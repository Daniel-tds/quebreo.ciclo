// ── Canais de urgência e emergência (cards com destaque roxo) ──
export const canaisUrgencia = [
    {
        numero: "190",
        titulo: "Polícia Militar",
        link: "tel:190",
        linkTexto: "Ligar 190",
        itens: [
            { rotulo: "Quando utilizar", texto: "quando a agressão estiver acontecendo ou houver risco imediato à integridade física." },
            { rotulo: "Como funciona", texto: "ligação gratuita, atendimento 24 horas, viatura pode ser enviada ao local e o agressor pode ser preso em flagrante." },
            { rotulo: "Importante", texto: "em caso de perigo atual, este é o meio mais rápido e seguro." },
        ]
    },
    {
        numero: "180",
        titulo: "Central de Atendimento à Mulher",
        link: "tel:180",
        linkTexto: "Ligar 180",
        itens: [
            { rotulo: null, texto: "Canal nacional de orientação e denúncia especializado em violência contra a mulher. Atendimento 24 horas, gratuito, anônimo e encaminha a denúncia aos órgãos competentes." },
            { rotulo: null, texto: "Indicado quando a vítima precisa de orientação, não sabe a quem recorrer ou deseja denunciar sem sair de casa." },
        ]
    }
];

// ── Órgãos de atendimento presencial em Barretos/SP ──
export const canaisPresenciais = [
    {
        titulo: "Delegacia de Defesa da Mulher (DDM)",
        telefone: "(17) 3612-2845",
        endereco: "Rua 18, nº 137 – Centro – Barretos/SP",
        atendimento: "segunda a sexta-feira, em horário comercial.",
        descricao: "Órgão da Polícia Civil especializado no atendimento de mulheres vítimas de violência doméstica. Pode-se registrar Boletim de Ocorrência, pedir Medida Protetiva de Urgência, iniciar investigação policial, encaminhar para exame de corpo de delito e solicitar medida protetiva.",
        complemento: null,
        passos: null,
        observacao: null
    },
    {
        titulo: "CRAM – Centro de Referência e Atendimento à Mulher",
        telefone: "(17) 98199-4002",
        endereco: "Rua Trinta, nº 564 – Centro – Barretos/SP",
        atendimento: "segunda a sexta-feira, em horário comercial.",
        descricao: "Órgão municipal de acolhimento e apoio às mulheres em situação de violência. Também oferece atendimento psicológico, orientação jurídica, encaminhamento para assistência social, apoio emocional e acompanhamento do caso.",
        complemento: null,
        passos: null,
        observacao: null
    }
];

// ── Canais digitais, aplicativos e outros ──
export const canaisDigitais = [
    {
        titulo: "Boletim de Ocorrência Online – SP",
        descricao: "Sistema da Polícia Civil que permite registrar ocorrência pela internet. Indicado quando não se trata de emergência ou quando a vítima não puder se deslocar até a delegacia.",
        complemento: "A delegacia responsável pode entrar em contato posteriormente. Também é possível solicitar medidas protetivas."
    },
    {
        titulo: "Aplicativo SP Mulher Segura",
        descricao: "Disponível para iOS e Android. Aplicativo gratuito que permite registrar boletins de ocorrência online, possui botão do pânico que aciona imediatamente a Polícia Militar em emergências e facilita o acesso a serviços de proteção.",
        complemento: null
    },
    {
        titulo: "Aplicativo SOS Mulher",
        descricao: "Disponível para iOS e Android. Aplicativo gratuito que permite acionar a Polícia Militar de forma rápida por mulheres que possuem medida protetiva.",
        complemento: "Basta pressionar o botão por cinco segundos."
    }
];