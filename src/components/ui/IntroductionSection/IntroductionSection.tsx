import { useLanguage } from "../../../context/LanguageContext";
import styles from "./IntroductionSection.module.css";
import meImage from "../../../assets/images/me2.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { GeneralIcons } from "../../../config/GeneralIcons";
import TerminalAnimation from "../TerminalAnimation/TerminalAnimation";

export default function IntroductionSection() {
  const { t } = useLanguage();
  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.texts}>
          <span className={styles.greeting}>{t.introductionSection.introText}</span>
          <h1 id="hero-title">{t.introductionSection.name}</h1>
          <span className={styles.eyebrow}>{t.introductionSection.eyebrow}</span>
          <div className={styles.stack} aria-label="Principais tecnologias">
            {['Java', 'Spring Boot', 'Docker', 'Node.js', 'React'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <p className={styles.description}>{t.introductionSection.text}</p>
          <p className={styles.result}>{t.introductionSection.result}</p>
          <ul className={styles.highlights}>
            {t.introductionSection.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className={styles.actions}>
            <PrimaryButton text={t.buttons.seeProjects} href="#ProjectsList" target="_self" icon={<GeneralIcons.down />} />
            <PrimaryButton text={t.buttons.contact} href="/contact" target="_self" bgColor="transparent" textColor="var(--primary)" borderColor="var(--primary)" />
          </div>
        </div>
        <div className={styles.picture}><img src={meImage} alt="Thiago Costa, desenvolvedor de software" /></div>
        <div className={styles.terminal}><TerminalAnimation /></div>
      </div>
    </section>
  );
}
