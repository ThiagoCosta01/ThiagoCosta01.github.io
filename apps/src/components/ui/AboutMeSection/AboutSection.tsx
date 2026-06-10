import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3>Back-End</h3>
                        <p>
                            Desenvolvimento de APIs, microsserviços e integrações
                            corporativas.
                        </p>
                        <span>4+ ANOS</span>
                    </div>

                    <div className={styles.card}>
                        <h3>Infraestrutura</h3>
                        <p>
                            Docker, Linux, CI/CD e automação de ambientes.
                        </p>
                        <span>DEVOPS</span>
                    </div>

                    <div className={styles.card}>
                        <h3>Arquitetura</h3>
                        <p>
                            Sistemas escaláveis e soluções para ambientes críticos.
                        </p>
                        <span>SOFTWARE</span>
                    </div>
                </div>

                <div className={styles.textContent}>
                    <span className={styles.label}>Sobre Mim</span>

                    <h2>
                        Desenvolvedor de Software
                        <br />
                        Full Stack
                    </h2>

                    <h3>
                        Transformando requisitos complexos em soluções simples e
                        escaláveis.
                    </h3>

                    <p>
                        Tenho mais de 4 anos de experiência atuando em sistemas
                        corporativos, automação de processos e infraestrutura.
                        Trabalho em todo o ciclo de desenvolvimento, desde o
                        levantamento de requisitos até deploy e monitoramento.
                    </p>

                    <p>
                        Minha principal experiência está em Java, Spring Boot,
                        Node.js, Docker, Linux e integração de sistemas
                        empresariais.
                    </p>
                </div>
            </div>
        </section>
    );
}