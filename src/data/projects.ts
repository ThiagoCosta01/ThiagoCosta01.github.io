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
        repositoryURL: "https://github.com/ThiagoCosta01/kataink",
        hostedURL: "https://kataink.thiagocostadev.com",
        isFinished: true,

    },
    
    {
        id: "personal-website",
        picture: portfolioPicture,
        technologies: ["react", "typescript"],
        link: "https://thiagocostadev.com",
        repositoryURL: "https://github.com/ThiagoCosta01/ThiagoCosta01.github.io",
        hostedURL: "https://thiagocostadev.com",
        isFinished: true,
    },

    {
        id: "cronos",
        picture: cronosPicture,
        technologies: ["springboot", "csharp", "mysql", "wpf"],
        link: "https://www.figma.com/design/3WZm0fTJRSW4PmahJYmaIk/Icone-Projetos?node-id=2-165&t=y5oJcqY7S7VbBOfH-0",
        imageURL: "https://www.figma.com/design/3WZm0fTJRSW4PmahJYmaIk/Icone-Projetos?node-id=2-165&t=y5oJcqY7S7VbBOfH-0",
        isFinished: true,
    },

    {
        id: "sci",
        picture: sciPicture,
        technologies: ["wpf", "mysql"],
        link: "https://www.controle.net/faq/ged-o-que-e-gestao-eletronica-de-documentos",
        imageURL: "https://thiagocostadev.com/assets/sci-CwjDoB9S.png",
        otherURL: "https://www.controle.net/faq/ged-o-que-e-gestao-eletronica-de-documentos",
        isFinished: true,
    },

    {
        id: "icone-website",
        picture: iconeWebsitePicture,
        technologies: ["angular", "typescript"],
        link: "https://www.iconeconsult.com.br/",
        hostedURL: "https://www.iconeconsult.com.br/",
        isFinished: true,
    },
    {
        id: "iinvent",
        picture: iinventPicture,
        technologies: ["java", "mysql"],
        link: "https://www.iconeconsult.com.br/",
        imageURL: "https://thiagocostadev.com/assets/iinvent-DDPFeP3k.png",
        isFinished: true,
    },
    {
        id: "keycloak",
        picture: keycloakPicture,
        technologies: ["windows", "linux", "docker"],
        link: "https://www.keycloak.org/",
        otherURL: "https://www.keycloak.org/",
        isFinished: true,
    },


];