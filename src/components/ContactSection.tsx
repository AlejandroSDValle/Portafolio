
import styled from 'styled-components';

function ContactSection() {
    return (
        <ContactSectionStyles className="contact" id='contacto'>
            <h2>Contactame</h2>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/alejandro-santillan-32a089218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/AlejandroSDValle" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <a href="./cv/CV.pdf" className="download-cv" download="cv.pdf">Download CV</a>
        </ContactSectionStyles>
    )
}

const ContactSectionStyles = styled.section`
    background-color: #222;
    color: #fff;
    padding: 40px 20px;
    text-align: center;


    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .social-links {
        margin-bottom: 20px;
    }

    .social-links a {
        color: #37B6E8;
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0 10px;
        transition: color 0.3s ease;
    }

    .social-links a:hover {
        color: #fff;
    }

    .download-cv {
        display: inline-block;
        background-color: #37B6E8;
        color: #fff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 1.1rem;
        transition: background-color 0.3s ease, transform 0.3s ease;/
    }

    .download-cv:hover {
        background-color: #2c8fb2;
        transform: scale(1.05);
    }
`;

export default ContactSection