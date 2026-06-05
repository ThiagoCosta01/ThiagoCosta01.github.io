import { Link } from "react-router-dom";

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
            <Link to="/">{map[mode]}</Link>
        </>
    )
}