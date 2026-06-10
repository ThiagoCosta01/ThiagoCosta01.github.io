import type { CSSProperties, ReactNode } from "react";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
    text: string;
    icon?: ReactNode;
    onClick?: () => void;
    href?: string;

    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    target?: string;
};

export default function PrimaryButton({
    text,
    icon,
    onClick,
    href,
    bgColor = "var(--primary)",
    textColor = "var(--text)",
    borderColor = "transparent",
    target="_blank",
}: PrimaryButtonProps) {
    const style: CSSProperties = {
        backgroundColor: bgColor,
        color: textColor,
        borderColor,
    };

    if (href) {
        return (
            <a
                href={href}
                className={styles.button}
                style={style}
                target={target}
                rel="noreferrer"
            >
                {icon}
                <span>{text}</span>
            </a>
        );
    }

    return (
        <button
            className={styles.button}
            style={style}
            onClick={onClick}
        >
            {icon}
            <span>{text}</span>
        </button>
    );
}