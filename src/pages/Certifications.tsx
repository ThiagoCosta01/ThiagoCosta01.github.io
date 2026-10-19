import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { useLanguage } from "../context/LanguageContext";
import { credentials } from "../data/certifications";
import styles from "./PageLayout.module.css";

function formatIssuedOn(issuedOn: string | undefined, locale: string) {
  if (!issuedOn) return "";
  const [year, month] = issuedOn.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
}

export default function Credentials() {
  const { lang, t } = useLanguage();
  const content = t.pages.certifications;
  const locale = lang === "pt" ? "pt-BR" : "en-US";

  return (
    <PageLayout eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <section className={styles.cardGrid} aria-label={content.eyebrow}>
        {credentials.map((credential) => {
          const details = t.credentials[credential.id];

          return (
            <article className={styles.card} key={credential.id}>
              <small className={styles.cardMeta}>
                {credential.issuer} · {content.issued} {formatIssuedOn(credential.issuedOn, locale)}
              </small>
              <h3>{details.title}</h3>
              <p>{details.description}</p>
              <div className={styles.projectLinks}>
                <a href={credential.credentialUrl} target="_blank" rel="noreferrer">
                  {content.credential} ↗
                </a>
              </div>
            </article>
          );
        })}
      </section>
      <div className={styles.actions}>
        <Link className={styles.action} to="/projects">
          {content.cta} →
        </Link>
      </div>
    </PageLayout>
  );
}
