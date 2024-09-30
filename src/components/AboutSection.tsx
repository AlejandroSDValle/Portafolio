import styled from 'styled-components';

function AboutSection() {
  return (
    <AboutSectionStyles>
        <h2>Sobre mi</h2>
        <div className="about-columns">
            <div className="about-text">
                <p>Soy Alejandro, estudiante de ingeniero en computación apasionado por el desarrollo web, con un
                    enfoque en la creación de aplicaciones intuitivas y eficientes.</p>
                <p>Soy una persona responsable y autodidacta, apasionada por la resolución de problemas. Poseo una
                    actitud positiva y un gran compromiso. Estoy constantemente en busca de aprendizaje y siempre
                    dispuesto a aprender nuevas tecnologías y herramientas, manteniéndome actualizado en mi área
                    específica.</p>
            </div>
            <div className="experience">
                <h3>Experiencia</h3>
                <p>Tengo experiencia en frontend y backend, utilizando tecnologías como React, JavaScript, y Java.
                    Además, soy un solucionador de problemas y disfruto aprender nuevas tecnologias y superar desafíos
                    técnicos.</p>
            </div>
        </div>
    </AboutSectionStyles>
  )
}

const AboutSectionStyles = styled.section`
    padding: 50px;
    background-color: #000;
    color: #fff;

    h2 {
        text-align: center;
        font-size: 30px;
        margin-bottom: 30px;
        text-transform: uppercase;
        color: #45a29e;
        letter-spacing: 2px;
    }

    .about-columns {
        display: flex;
        gap: 50px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .about-text,
    .experience {
        flex: 1;
        min-width: 300px;
        background-color: #1f2833;
        padding: 20px;
        border-radius: 10px;
    }

    .about-text p {
        line-height: 1.6;
        margin-bottom: 15px;
    }

    .experience h3 {
        font-size: 28px;
        margin-bottom: 20px;
        color: #45a29e;
    }

    .experience p {
        line-height: 1.6;
    }


    @media (max-width: 768px) {
        .about-columns {
            flex-direction: column;
            gap: 30px;
        }
    }
`;

export default AboutSection