import styles from "./css/About.module.css";

function About() {
    return (
        <div className={styles.about}>

            <h2>Sobre mí</h2>

            <div className={styles.aboutColumns}>

                <div className={styles.aboutText}>
                    <p>
                        Soy <strong>Alejandro</strong>, ingeniero en computación apasionado por el desarrollo web, con un enfoque en
                        la creación de aplicaciones intuitivas, eficientes y escalables.
                    </p>
                    <p>
                        Me considero una persona <strong>responsable, autodidacta y comprometida</strong>, con una actitud positiva
                        y gran interés por la resolución de problemas. Siempre estoy en busca de aprendizaje y
                        nuevas tecnologías para mantenerme actualizado en mi campo.
                    </p>
                </div>

                <div className={styles.experience}>
                    <h3>Experiencia</h3>

                    <p>
                        Tengo experiencia en el diseño e implementación de <strong>aplicaciones web</strong>, destacando en el
                        ecosistema <strong>Java con Spring Boot</strong>. También poseo conocimientos en <strong>Hibernate, JPA
                            y microservicios</strong>.
                    </p>

                    <p>
                        He trabajado en la automatización de procesos financieros, la integración de
                        servicios bancarios y la implementación de modelos de predicción de datos.
                    </p>

                    <p>
                        Además, cuento con experiencia en tecnologías como <strong>Docker, React, GitHub y Bootstrap</strong>, lo que
                        me permite desenvolverme tanto en <strong>backend</strong> como en <strong>frontend</strong>.
                    </p>

                    <p>
                        Actualmente, sigo perfeccionando mis conocimientos en arquitecturas de microservicios y
                        buenas prácticas de desarrollo, con el objetivo de optimizar el rendimiento y escalabilidad
                        de mis proyectos.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About;
