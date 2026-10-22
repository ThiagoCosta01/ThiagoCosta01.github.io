export type TimelineItem = {
  id?: number;
  year: string;
  title: string;
  company?: string;
  companyUrl?: string;
  school?: string;
  icon: "graduation" | "work";
};

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2022",
    title: "Analista de T.I. (Estágio)",
    company: "Cast Group",
    companyUrl: "https://www.cast4it.com/",
    icon: "work",
  },
  {
    id: 2,
    year: "2023",
    title: "Freelancer de Suporte em TI ",
    company: "3AM IT Services",
    companyUrl: "https://www.3amitservices.com/",
    icon: "work",
  },
  {
    id: 3,
    year: "2024",
    title: "Desenvolvedor Full Stack / Infraestrutura ",
    company: "Icone – Inoue Consultoria e Engenharia ",
    companyUrl: "https://www.iconeconsult.com.br/",
    icon: "work",
  },
  {
    id: 4,
    year: "2026",
    title: "Graduação em Análise e Desenvolvimento de Sistemas pela Uninter",
    school: "UNINTER",
    icon: "graduation",
  },
  {
    id: 5,
    year: "Present",
    title: "Técnico de Suporte de TI / IAM",
    company: "Nexa Tecnologia ",
    companyUrl: "https://www.nexa.com.br/",
    icon: "work",
  },
];
