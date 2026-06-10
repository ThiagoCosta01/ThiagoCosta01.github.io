import { Link } from "react-router-dom";
import styles from "./Logo.module.css"

type LogoMode = "simbol" | "name" | "full";

type LogoProps = {
    mode: LogoMode;
};


export default function Logo({ mode }: LogoProps) {
    const simbol: string = ">_";
    const name: string = "Thiago Costa";

    const map = {
        simbol,
        name,
        full: `${simbol} ${name}`,
    };

    return (
        <>
            <div className={`${styles.container}`}>
                <Link to="/">{map[mode]}</Link>
            </div >
        </>
    )
}