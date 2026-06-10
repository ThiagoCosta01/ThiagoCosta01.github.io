import { FaReact, FaWpforms, FaJava, FaAngular, FaDocker  } from "react-icons/fa";
import { SiTypescript, SiCss, SiJavascript, SiSpring, SiSpringboot, SiMysql, SiGrafana, SiPostgresql  } from "react-icons/si";
import { SiKeycloak } from "react-icons/si";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { TiVendorMicrosoft } from "react-icons/ti";
import { DiNginx } from "react-icons/di";

export const techIcons = {
  react: FaReact,
  typescript: SiTypescript,
  css: SiCss,
  javascript: SiJavascript,
  wpf: FaWpforms,
  java: FaJava, 
  angular: FaAngular, 
  docker: FaDocker,
  spring: SiSpring, 
  springboot: SiSpringboot, 
  mysql: SiMysql,
  postgres: SiPostgresql,
  grafana: SiGrafana,
  keycloak: SiKeycloak,
  csharp: PiFileCSharpDuotone,
  windows: TiVendorMicrosoft,
  nginx: DiNginx
} as const;