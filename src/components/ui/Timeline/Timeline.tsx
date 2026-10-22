import styles from "./Timeline.module.css";

import type { TimelineItem } from "../../../data/timelineData";
import { timelineData } from "../../../data/timelineData";
import { GeneralIcons } from "../../../config/GeneralIcons";

type TimelineProps = {
    items?: TimelineItem[];
};

export default function Timeline({ items = timelineData }: TimelineProps) {
    return (
        <section className={styles.timeline} aria-label="Career timeline">
            {items.map((item) => {
                const Icon =
                    item.icon === "graduation"
                        ? GeneralIcons.graduation
                        : GeneralIcons.work;

                return (
                    <article className={styles.item} key={`${item.year}-${item.title}`}>
                        <time className={styles.year}>{item.year}</time>

                        <div className={styles.markerColumn} aria-hidden="true">
                            <span className={styles.marker}>
                                <Icon />
                            </span>
                        </div>



                        <div className={styles.content}>
                            <p className={styles.description}>
                                {item.title}
                                {item.company && (
                                    <>
                                        <span className={styles.separator}> · </span>
                                        {item.companyUrl ? (
                                            <a
                                                className={styles.company}
                                                href={item.companyUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {item.company}
                                            </a>
                                        ) : (
                                            <span className={styles.company}>{item.company}</span>
                                        )}
                                    </>
                                )}
                            </p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
