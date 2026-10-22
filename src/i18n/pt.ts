import type { CertificationId } from "../types/Certification";

export const pt = {
  seo: {
    title: "Thiago Costa | Desenvolvedor Backend e Fullstack",
    description: "Portfólio de Thiago Costa, desenvolvedor backend/fullstack com Java, Spring Boot, Node.js, Docker e experiência em sistemas corporativos.",
  },
  general: { myName: "Thiago Costa", myDescription: "Software Developer", projects: "Projetos", finishedProjects: "Concluídos", ongoingProjects: "Em Andamento" },
  introductionSection: {
    introText: "Olá, eu sou",
    name: "Thiago Costa",
    eyebrow: "Desenvolvedor Backend / Fullstack",
    text: "Construo APIs, integrações e automações confiáveis para sistemas corporativos — do levantamento de requisitos ao deploy e monitoramento.",
    result: "Mais de 4 anos transformando requisitos complexos em soluções simples, escaláveis e fáceis de manter.",
    highlights: ["APIs e microsserviços", "Integrações corporativas", "Docker, Linux e CI/CD"],
  },
  aboutMeSection: {
    sectionName: "Sobre Mim", title: "Desenvolvedor de Software Full Stack", subtitle: "Transformando requisitos complexos em soluções simples e escaláveis.",
    text: "Tenho mais de 4 anos de experiência atuando em sistemas corporativos, automação de processos e infraestrutura. Trabalho em todo o ciclo de desenvolvimento, desde o levantamento de requisitos até deploy e monitoramento.",
    text2: "Minha principal experiência está em Java, Spring Boot, Node.js, Docker, Linux e integração de sistemas empresariais.",
    backendCard: { title: "Back-End", description: "Desenvolvimento de APIs, microsserviços e integrações corporativas.", subtitle: "4+ ANOS" },
    InfrastructureCard: { title: "Infraestrutura", description: "Docker, Linux, CI/CD e automação de ambientes.", subtitle: "DEVOPS" },
    architectureCard: { title: "Arquitetura", description: "Sistemas escaláveis e soluções para ambientes críticos.", subtitle: "SOFTWARE" },
  },
  skillsSection: { sectionName: "Stack Tecnológica", title: "Tecnologias & Ferramentas", subtitle: "Experiência no desenvolvimento de aplicações web, sistemas corporativos, APIs REST e automação de processos utilizando tecnologias modernas do ecossistema Java e JavaScript." },
  pages: {
    about: { eyebrow: "Sobre mim", title: "Engenharia de software com visão de produto", intro: "Atuo na interseção entre backend, infraestrutura e experiência do usuário, buscando entregar soluções que funcionem bem em produção e sejam sustentáveis para o time.", experienceTitle: "Como posso contribuir", points: ["Construção de APIs REST, integrações e regras de negócio", "Automação de processos e ambientes com Docker, Linux e CI/CD", "Colaboração com produto e levantamento de requisitos", "Monitoramento, manutenção e evolução de sistemas corporativos"], cta: "Ver projetos" },
    projects: { eyebrow: "Projetos", title: "Problemas reais, soluções aplicáveis", intro: "Uma seleção de projetos acadêmicos, corporativos e pessoais que mostra minha atuação em backend, integração, infraestrutura e desenvolvimento fullstack.", privateNote: "Alguns projetos são privados. Nesses casos, apresento o contexto e a contribuição técnica sem expor informações confidenciais." },
    certifications: { eyebrow: "Certificações", title: "Cursos e credenciais verificáveis", intro: "Formação complementar em backend, sistemas corporativos e comunicação técnica. A evidência prática continua nos projetos em produção.", cta: "Ver projetos", credential: "Ver certificado", issued: "Emitido em" },
    contact: { eyebrow: "Contato", title: "Vamos conversar sobre tecnologia", intro: "Estou aberto a oportunidades backend/fullstack e a conversas sobre APIs, sistemas corporativos, automação e arquitetura de software.", email: "Enviar e-mail", linkedin: "Conectar no LinkedIn", github: "Ver GitHub", cv: "Baixar currículo" },
  },
  underConstruction: { text: "Desculpe, site em desenvolvimento!" },
  curriculum: { link: "https://drive.google.com/uc?export=download&id=1VBZ6W-KppgPfYl5JmngfqMSfbWLMaYCQ" },
  buttons: { seeProjects: "Ver projetos", contact: "Falar comigo" },
  navbar: { home: "Início", about: "Sobre", contact: "Contato", projects: "Projetos", certifications: "Certificações" },
  footer: { main: { text: "Desenvolvendo APIs escaláveis, soluções de automação e sistemas corporativos com Java, Spring Boot, Node.js e Docker.", secondaryText: "Disponível para novas oportunidades." }, stack: "PRINCIPAIS TECNOLOGIAS", backToTop: "VOLTAR AO TOPO", navigation: "NAVEGAÇÃO" },
  projects: {
    cronos: { title: "Cronos", subtitle: "Projeto Corporativo Privado", description: "Sistema desktop de monitoramento de tempo e produtividade dos usuários." },
    sci: { title: "SCI - Sistema de Controle Integrado", subtitle: "Projeto Corporativo Privado", description: "GED para gerenciamento de documentos de engenharia, com versionamento e rastreabilidade de documentos." },
    "icone-website": { title: "Portal Institucional da Icone Consultoria e Engenharia", subtitle: "Website Corporativo", description: "Landing page da consultoria de engenharia Icone - Inoue." },
    kataink: { title: "KataInk", subtitle: "Projeto de Faculdade", description: "Aplicação web para aprendizagem de katakana através da escrita manual." },
    "personal-website": { title: "Portfólio pessoal", subtitle: "Website", description: "Meu site pessoal de portfólio hospedado na AWS e no GitHub Pages." },
    keycloak: { title: "SSO", subtitle: "Projeto Corporativo Privado", description: "SSO de autenticação e autorização de usuários utilizando Keycloak." },
    iinvent: { title: "IInvent", subtitle: "Projeto Corporativo Privado", description: "Sistema de gerenciamento de inventário e controle de estoque para empresas." },
    btcrt: { title: "BTC RT", subtitle: "Extensão para Google Chrome", description: "Extensão para Google Chrome que exibe a cotação do Bitcoin em tempo real na barra de ferramentas do navegador." },
  },
  credentials: {
    "english-it": { title: "Inglês para Tecnologia da Informação", description: "Vocabulário e comunicação técnica para ambientes de desenvolvimento, suporte e documentação." },
    "sap-abap": { title: "SAP ABAP Programming", description: "Fundamentos de ABAP para customização e relatórios em ambientes SAP corporativos." },
    "clean-code-abap": { title: "Clean Code ABAP", description: "Práticas de código limpo aplicadas a ABAP: legibilidade, responsabilidade única e manutenção." },
  } satisfies Record<CertificationId, { title: string; description: string }>,
};
