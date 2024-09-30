import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

function HeroSection() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf'; // Ruta al archivo PDF en la carpeta public
        link.download = 'CV.pdf'; // Nombre del archivo descargado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <HeroSectionStyle>
            <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            </div>

            <div className="intro-left">
                <p className="greeting">
                <span className='me'>Hola, <br /> soy <span className="name">Alejandro<span className="maquina">&#160;</span></span></span> <br /> Ingeniero en Computación
                </p>
                <div className="contactame computadora">
                    <span>Contactame</span>
                    <nav>
                        <a href="https://github.com/AlejandroSDValle" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/alejandro-santillan-32a089218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    </nav>
                </div>
                <div className='contactame-sm'>
                    <a href="#contacto">Contactame</a>
                </div>
            </div>

            <div className="hero-image">
                <img src="./yo.png" alt="Imagen de Alejandro" />
            </div>

            <div className="intro-right">
                <p className="expert">Experto en</p>
                <p className="description-me">Soy un desarrollador principiante <br /> con experiencia en backend y frontend.</p>
                <p className="description">¿Buscas a alguien para realizar páginas web? ¡Hablemos!</p>
                <button className="boton-hover" onClick={handleDownload}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Download CV
                </button>
            </div>
        </HeroSectionStyle>
    )
}

const HeroSectionStyle = styled.header`
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    height: 70vh;
    background-color: #000;
    position: relative;
    overflow: hidden;
    padding: 0 100px;

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    }

    .circles::before,
    .circles::after {
        content: "";
        position: absolute;
        border-radius: 50%;
    }

    .circles::before {
        width: 150px;
        height: 150px;
        top: 7%;
        left: 20%;
        transform: scale(1.2);
        border: 2px solid #38F3FF;
    }

    .circles::after {
        width: 50px;
        height: 50px;
        top: 5%;
        left: 30%;
        transform: scale(1.5);
        border: 2px solid #EB4A4A;
    }

    .circles div {
        position: absolute;
        border-radius: 50%;
    }

    .circles .circle1 {
        width: 80px;
        height: 80px;
        top: 80%;
        left: 80%;
        border: 2px solid #EB4A4A;
        z-index: 12;
    }

    .circles .circle2 {
        width: 120px;
        height: 120px;
        top: 70%;
        left: 30%;
        background: #EB4A4A;
    }

    .circles .circle3 {
        width: 40px;
        height: 40px;
        top: 80%;
        left: 83%;
        border: 2px solid #38F3FF;
    }

    .circles .circle4 {
        width: 40px;
        height: 40px;
        top: 10%;
        left: 80%;
        background: #38F3FF;
    }

    .intro-left {
        text-align: left;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 1;
    }
    .greeting {
        font-size: 56px;
        line-height: 1.2;
    }

    .greeting .maquina {
        position: absolute;
        right: 0;
        width: 0;
        background: #000;
        border-left: 2px solid white;
        animation: escribir 5s steps(20) infinite alternate;
    }

    @keyframes escribir {
        from {
            width: 100%;
        }

        to {
            width: 0;
        }
    }

    .name {
        position: relative;
        color: #45a29e;
        padding: 0 15px 0 0;
    }

    .greeting .me{
        font-weight: bold;
    }

    .hero-image {
        position: relative;
        overflow: hidden;
    }
    
    .hero-image img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    .hero-image::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        z-index: 1;
    }

    .intro-right {
        text-align: left;
        color: white;
        z-index: 1;
    }

    .expert {
        font-size: 18px;
        margin-bottom: 20px;
        color: #EB4A4A;
        font-weight: bold;

    }

    .description-me {
        margin-top: 10px;
        font-size: 18px;
        font-size: 30px;
    }

    .description {
        font-size: 18px;
        color: #ccc;
    }

    .boton-hover {
        position: relative;
        padding: 15px 20px;
        font-size: 20px;
        border: none;
        outline: none;
        background-color: transparent;
        color: #dcc2e4;
        cursor: pointer;
        transition: 0.5s;
        overflow: hidden;
        border-bottom: 1px solid #EB4A4A;
    }

    .boton-hover:hover {
        color: #fff;
        border-bottom: 0;
    }

    .boton-hover span {
        position: absolute;
        background-color: #EB4A4A;
        transition: .5s;
    }

    .boton-hover span:nth-child(1) {
        width: 100%;
        height: 1px;
        top: 0;
        left: -100%;
    }

    .boton-hover span:nth-child(2) {
        width: 100%;
        height: 1px;
        bottom: 0;
        right: -100%;
    }

    .boton-hover span:nth-child(3) {
        width: 1px;
        height: 100%;
        bottom: -100%;
        left: 0;
    }

    .boton-hover span:nth-child(4) {
        width: 1px;
        height: 100%;
        top: -100%;
        right: 0;
    }

    .boton-hover:hover span:nth-child(1) {
        left: 0;
    }

    .boton-hover:hover span:nth-child(2) {
        right: 0;
    }

    .boton-hover:hover span:nth-child(3) {
        bottom: 0;
    }

    .boton-hover:hover span:nth-child(4) {
        top: 0;
    }


    /* boton de contactame*/
    .contactame{
        position: relative;
        width: 400px;
        margin-top: -40px;
        border-radius: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contactame span {
        line-height: 60px;
        display: inline-block;
        font-weight: 700;
        text-transform: uppercase;
        position: absolute;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
        pointer-events: none;
    }

    .contactame nav {
        font-size: 0;
    }

    .contactame a {
        line-height: 60px;
        width: 60px;
        text-align: center;
        display: inline-block;
        background: linear-gradient(180deg, #ea4335, #EB4A4A);
        color: #ffffff;
        opacity: 1;
        transition: all 0.3s ease-in-out;
        margin: 0 -5px;
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
    }

    .contactame a:nth-child(1) {
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
    }

    .contactame a:nth-child(1):hover {
        background-color: #333333;
    }

    .contactame a:nth-child(2):hover {
        background-color: #1877F2; 
    }

    .contactame a:nth-child(3):hover {
        background-color: #0A66C2; 
    }

    .contactame a:nth-child(4) {
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
    }

    .contactame a:nth-child(4):hover {
        background-color: #25D366; 
    }

    .contactame:hover span {
        opacity: 0;
    }

    .contactame:hover a {
        margin: 0 10px;
        color: #413838;
        font-size: 25px;
        border-radius: 50%;
        color: #fff;
        background: rgba(255, 255, 255, 0.3); 
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
    }

    .contactame:hover a:hover {
        color: #fff;
    }
        
    .contactame-sm{
        display: none;
    }


    /* Media queries para dispositivos móviles */
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 20px;
        height: auto; 


        .greeting {
            font-size: 32px;
            line-height: 1.4;
        }

        .name {
            font-size: 28px;
        }

        .expert {
            font-size: 16px;
        }

        .description-me {
            font-size: 24px;
        }

        .description {
            font-size: 16px;
        }

        .hero-image img {
            width: 100%;
            height: auto;
        }

        .computadora{
            display: none;
        }
        
        .contactame-sm{
            display: block;
            background: linear-gradient(180deg, #ea4335, #EB4A4A);
            padding: 10px 20px;
            border-radius: 20px;
            text-align: center;
            font-weight: 700;
            cursor: pointer;
        }

        .contactame-sm a{
            color: white;
            text-decoration:none;
            text-transform: uppercase;
        }

        .boton-hover {
            padding: 10px 15px;
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        .greeting {
            font-size: 24px;
        }

        .name {
            font-size: 20px;
        }

        .expert {
            font-size: 14px;
        }

        .description-me {
            font-size: 20px;
        }

        .description {
            font-size: 14px;
        }

        .boton-hover {
            padding: 8px 12px;
            font-size: 14px;
        }
    }

    /* Media queries para dispositivos móviles */
    @media (max-width: 1000px) {
        .circles {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .circles {
            display: none;
        }
    }
`;

export default HeroSection