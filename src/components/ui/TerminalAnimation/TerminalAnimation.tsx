import { useEffect, useRef, useState } from "react";
import styles from "./TerminalAnimation.module.css";

type TerminalCommand = {
    command: string;
    output: string[];
};

type TerminalLine = {
    type: "command" | "output";
    text: string;
};

const terminalCommands: TerminalCommand[] = [
    {
        command: "java --version",
        output: [
            "openjdk 21.0.8 2026-07-15",
            "OpenJDK Runtime Environment",
        ],
    },
    {
        command: "docker ps",
        output: [
            "CONTAINER ID   IMAGE             STATUS",
            "a82f91c4       mysql:8.0         Up 2 hours",
            "c72e12ab       redis:7            Up 2 hours",
        ],
    },
    {
        command: "mvn clean install",
        output: [
            "[INFO] Scanning for projects...",
            "[INFO] Building portfolio-api",
            "[INFO] BUILD SUCCESS",
        ],
    },
    {
        command: "git status",
        output: [
            "On branch main",
            "Your branch is up to date with 'origin/main'.",
            "nothing to commit, working tree clean",
        ],
    },
    {
        command: "git log -1 --oneline",
        output: [
            "8f42a1c feat: improve portfolio terminal",
        ],
    },
    {
        command: "curl localhost:8080/api/health",
        output: [
            '{"status":"UP"}',
        ],
    },
    {
        command: "npm run build",
        output: [
            "vite building for production...",
            "✓ built in 1.82s",
        ],
    },
    {
        command: "docker compose up -d",
        output: [
            "Container mysql Started",
            "Container redis Started",
            "Container api Started",
        ],
    },
];

const TYPING_SPEED = 50;
const COMMAND_DELAY = 500;
const OUTPUT_DELAY = 250;
const NEXT_COMMAND_DELAY = 800;
const MAX_VISIBLE_LINES = 14;

export default function TerminalAnimation() {
    const [lines, setLines] = useState<TerminalLine[]>([]);
    const [currentCommand, setCurrentCommand] = useState("");

    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelled = false;
        let commandIndex = 0;

        const sleep = (ms: number) =>
            new Promise<void>((resolve) =>
                setTimeout(resolve, ms)
            );

        const addLine = (line: TerminalLine) => {
            if (cancelled) return;

            setLines((current) => {
                const next = [...current, line];

                return next.slice(-MAX_VISIBLE_LINES);
            });
        };

        const typeCommand = async (command: string) => {
            let typedCommand = "";

            for (const character of command) {
                if (cancelled) return false;

                typedCommand += character;
                setCurrentCommand(typedCommand);

                await sleep(TYPING_SPEED);
            }

            return true;
        };

        const runTerminal = async () => {
            while (!cancelled) {
                const terminalCommand =
                    terminalCommands[
                        commandIndex % terminalCommands.length
                    ];

                setCurrentCommand("");

                const typed = await typeCommand(
                    terminalCommand.command
                );

                if (!typed || cancelled) return;

                await sleep(COMMAND_DELAY);

                addLine({
                    type: "command",
                    text: terminalCommand.command,
                });

                setCurrentCommand("");

                for (const output of terminalCommand.output) {
                    if (cancelled) return;

                    await sleep(OUTPUT_DELAY);

                    addLine({
                        type: "output",
                        text: output,
                    });
                }

                commandIndex++;

                await sleep(NEXT_COMMAND_DELAY);
            }
        };

        runTerminal();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!terminalRef.current) return;

        terminalRef.current.scrollTop =
            terminalRef.current.scrollHeight;
    }, [lines, currentCommand]);

    return (
        <div className={styles.terminal}>

            <div className={styles.terminalHeader}>
                <span className={styles.close} />
                <span className={styles.minimize} />
                <span className={styles.maximize} />

                <span className={styles.title}>
                    thiago@portfolio: ~
                </span>
            </div>

            <div
                ref={terminalRef}
                className={styles.terminalBody}
            >
                {lines.map((line, index) => (
                    <div
                        key={`${index}-${line.text}`}
                        className={
                            line.type === "command"
                                ? styles.command
                                : styles.output
                        }
                    >
                        {line.type === "command" && (
                            <span className={styles.prompt}>
                                $
                            </span>
                        )}

                        <span>{line.text}</span>
                    </div>
                ))}

                <div className={styles.command}>
                    <span className={styles.prompt}>
                        $
                    </span>

                    <span>
                        {currentCommand}
                        <span className={styles.cursor}>
                            ▋
                        </span>
                    </span>
                </div>
            </div>

        </div>
    );
}