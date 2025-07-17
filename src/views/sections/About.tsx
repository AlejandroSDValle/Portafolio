import { useEffect, useState } from "react";
import styles from "./css/About.module.css";


interface VimBoxProps {
  startLine: number;
  lines900: number;
  lines800: number;
  lines700: number;
  lines600: number;
  lines500: number;
  lines400: number;
  lines300: number; 
  children: React.ReactNode;
}


const VimBox: React.FC<VimBoxProps> = ({ startLine, lines900, lines800, lines700, lines600, lines500, lines400, lines300, children }) => {
  const [endLine, setEndLine] = useState(startLine + lines900 - 1);

  useEffect(() => {
    const updateLines = () => {
      const width = window.innerWidth;
      if (width <= 300) {
        setEndLine(startLine + lines300 - 1);
      }else if (width <= 400) {
        setEndLine(startLine + lines400 - 1);
      } else if (width <= 500) {
        setEndLine(startLine + lines500 - 1);
      } else if (width <= 600) {
        setEndLine(startLine + lines600 - 1);
      } else if (width <= 700) {
        setEndLine(startLine + lines700 - 1);
      } else if (width <= 800) {
        setEndLine(startLine + lines800 - 1);
      } else if (width <= 900) {
        setEndLine(startLine + lines900 - 1);
      } else {
        setEndLine(startLine + lines900 - 1); 
      }
    };

    updateLines(); 
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, [startLine, lines900, lines700, lines500]);

  const lines = [];
  for (let i = startLine; i <= endLine; i++) {
    lines.push(
      <span key={i} className={styles.lineNumberVim}>
        {i}
      </span>
    );
  }

  return (
    <div className={styles.vimBox}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", borderRight: "4px solid #007acc" }}>
          {lines}
        </div>
        <div>{children}</div>
      </div>
      ~<br />
      <span style={{ color: "#98c379" }}>COMMAND</span>
      <br />
      <span className={styles.command}>:q</span>
    </div>
  );
};

function About() {
    const currentDate = new Date().toISOString();

    return (
        <div className={styles.about}>
            <h2>Sobre mí</h2>

            <div className={styles.aboutColumns}>

                <div className={styles.terminalContainer}>
                    <div className={styles.terminalHeader}>
                        <span className={`${styles.btn} ${styles.red}`} />
                        <span className={`${styles.btn} ${styles.yellow}`} />
                        <span className={`${styles.btn} ${styles.green}`} />
                    </div>
                    <div className={styles.terminalBody}>
                        <div>
                            <span className={styles.lineNumber}>492 [{currentDate}] @Alejandro:~$ </span>{" "}
                            <span className={styles.command}>ls</span>
                        </div>
                        <div className={styles.output}>
                            Desktop{"\u00A0\u00A0\u00A0"}Downloads{"\u00A0\u00A0\u00A0"}Pictures{"\u00A0\u00A0\u00A0"}Videos
                            <br />
                            Documents{"\u00A0\u00A0\u00A0"}Music{"\u00A0\u00A0\u00A0"}Public
                        </div>
                        <div>
                            <span className={styles.lineNumber}>493 [{currentDate}] @Alejandro:~$ </span>
                            <span className={styles.command}>cd Documents</span>
                        </div>
                        <div>
                            <span className={styles.lineNumber}>494 [{currentDate}] @Alejandro:~/Documents$ </span>
                            <span className={styles.command}>vim sobre-mi.txt</span>
                        </div>

                        <VimBox startLine={1} lines900={7} lines800={8} lines700={10} lines600={11} lines500={15} lines400={21} lines300={30}>
                            Soy Alejandro, <strong>Ingeniero en computación</strong> apasionado por el desarrollo web, con 
                            un enfoque en la creación de aplicaciones intuitivas, eficientes y escalables. <br />
                            Me considero una persona <strong>responsable, autodidacta y comprometida</strong> con una 
                            actitud positiva y gran interés por la resolución de problemas. Siempre estoy 
                            en busca de aprendizaje y nuevas tecnologías para mantenerme actualizado en mi 
                            campo. 
                        </VimBox>

                        <div>
                            <span className={styles.lineNumber}>496 [{currentDate}] @Alejandro:~/Documents$ </span>
                            <span className={styles.command}>exit</span>
                        </div>

                        <div className={styles.terminatedMessage}>
                            Session terminated.
                        </div>
                    </div>
                </div>

                <div className={styles.terminalContainer}>
                    <div className={styles.terminalHeader}>
                        <span className={`${styles.btn} ${styles.red}`} />
                        <span className={`${styles.btn} ${styles.yellow}`} />
                        <span className={`${styles.btn} ${styles.green}`} />
                    </div>
                    <div className={styles.terminalBody}>
                        <div>
                            <span className={styles.lineNumber}>492 [{currentDate}] @Alejandro:~$ </span>{" "}
                            <span className={styles.command}>ls</span>
                        </div>
                        <div className={styles.output}>
                            Desktop{"\u00A0\u00A0\u00A0"}Downloads{"\u00A0\u00A0\u00A0"}Pictures{"\u00A0\u00A0\u00A0"}Videos
                            <br />
                            Documents{"\u00A0\u00A0\u00A0"}Music{"\u00A0\u00A0\u00A0"}Public
                        </div>
                        <div>
                            <span className={styles.lineNumber}>493 [{currentDate}] @Alejandro:~$ </span>
                            <span className={styles.command}>cd Documents</span>
                        </div>
                        <div>
                            <span className={styles.lineNumber}>494 [{currentDate}] @Alejandro:~/Documents$ </span>
                            <span className={styles.command}>vim experiencia.txt</span>
                        </div>

                        <VimBox startLine={1} lines900={16} lines800={17} lines700={21} lines600={24} lines500={30} lines400={38} lines300={60}>
                            Tengo experiencia en el diseño e implementación de <strong>aplicaciones web</strong>, destacando
                            en el ecosistema <strong>Java con Spring Boot</strong>. También poseo conocimientos
                            en Hibernate, JPA y microservicios.
                            <br /><br />
                            He trabajado en la automatización de procesos financieros, la integración de
                            servicios bancarios y la implementación de modelos de predicción de datos.
                            <br /><br />
                            Además, cuento con experiencia en tecnologías como Docker, GitHub, Angular,
                            y React, lo que me permite desenvolverme tanto en backend como en frontend.
                            <br /><br />
                            Actualmente, sigo perfeccionando mis conocimientos en arquitecturas de
                            microservicios y buenas prácticas de desarrollo, con el objetivo de optimizar
                            el rendimiento y escalabilidad de mis proyectos.
                        </VimBox>

                        <div>
                            <span className={styles.lineNumber}>496 [{currentDate}] @Alejandro:~/Documents$ </span>
                            <span className={styles.command}>exit</span>
                        </div>
                        <div className={styles.terminatedMessage}>
                            Session terminated.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
