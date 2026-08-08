import type { Project } from "../types/Project";
import cronosPicture from "../assets/images/cronos.png";
import portfolioPicture from "../assets/images/portfolio.png";
import keycloakPicture from "../assets/images/keycloak.png";
import iconeWebsitePicture from "../assets/images/icone_website.png";
import katainkPicture from "../assets/images/kataink.png";
import sciPicture from "../assets/images/sci.png";
import iinventPicture from "../assets/images/iinvent.png";

export const projects: Project[] = [
    {
        id: "kataink",
        picture: katainkPicture,
        technologies: ["react", "typescript"],
        link: "https://thiagocosta01.github.io/kataink/",
    },
    
    {
        id: "personal-website",
        picture: portfolioPicture,
        technologies: ["react", "typescript"],
        link: "https://github.com/ThiagoCosta01/ThiagoCosta01.github.io",
    },

    {
        id: "cronos",
        picture: cronosPicture,
        technologies: ["springboot", "csharp", "mysql", "wpf"],
        link: "https://www.figma.com/design/3WZm0fTJRSW4PmahJYmaIk/Icone-Projetos?node-id=2-165&t=y5oJcqY7S7VbBOfH-0",
    },

    {
        id: "sci",
        picture: sciPicture,
        technologies: ["wpf", "mysql"],
        link: "https://www.controle.net/faq/ged-o-que-e-gestao-eletronica-de-documentos",
    },

    {
        id: "icone-website",
        picture: iconeWebsitePicture,
        technologies: ["angular", "typescript"],
        link: "https://www.iconeconsult.com.br/",
    },
    {
        id: "iinvent",
        picture: iinventPicture,
        technologies: ["java", "mysql"],
        link: "https://www.iconeconsult.com.br/",
    },
    {
        id: "keycloak",
        picture: keycloakPicture,
        technologies: ["windows", "linux", "docker"],
        link: "https://www.keycloak.org/",
    },


];