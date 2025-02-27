import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import styles from "./css/Hero.module.css"

function Hero() {
    const handleOpenPDF = () => {
        window.open('/Alejandro Santillan - CV.pdf', '_blank');
    };

    return (
        <div className={styles.hero}>
            <div className={styles.circles}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.circle4}></div>
            </div>

            <div className={styles.introLeft}>
                <p className={styles.greeting}>
                    <span className={styles.me}>Hola, <br /> soy <span className={styles.name}>Alejandro<span className={styles.maquina}>&#160;</span></span></span> <br /> Ingeniero en Computación
                </p>
                <div className={styles.contactame}>
                    <a href="https://github.com/AlejandroSDValle" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/alejandro-santillan-32a089218" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
            </div>

            <div className={styles.heroImage}>
                <img src="./yo.png" alt="Imagen de Alejandro" />
            </div>

            <div className={styles.introRight}>
                <p className={styles.expert}>Experto en</p>
                <p className={styles.descriptionMe}>Soy desarrollador Java <br /> con experiencia en backend y frontend.</p>
                <p className={styles.description}>¿Buscas a alguien para realizar páginas web? ¡Hablemos!</p>
                <button className={styles.botonHover} onClick={handleOpenPDF}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Open CV
                </button>
            </div>
        </div>
    )
}

export default Hero