import styled from 'styled-components';
import Slider from "react-slick";
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1098,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <ProjectsSectionStyles>
            <h2>Projects</h2>
            <div className="slider-container">
                <Slider {...settings}>

                    {projects.map((project) => (
                        <div key={project.name} className="project-card">
                            <div className="icon-container">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='github-icon' />
                                </a>
                            </div>
                            <img src={`./${project.img}.png`} alt={project.name} />
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tecnologies.map((tech, techIndex) => (
                                    <span key={techIndex}>#{tech}</span>
                                ))}
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </ProjectsSectionStyles>
    )
}

const ProjectsSectionStyles = styled.section`
    width: 90%;
    margin: auto;
    padding: 20px 0;

    h2 {
        color: #45a29e;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .slick-slide > div{
        margin: 0 28px;
    }

    .slider-container{
        margin-top: 20px;
    }

    .project-card {
        background-color: #1f2833;
        padding: 20px;
        border-radius: 20px;
        transition: transform 0.3s ease;
        text-align: center;
        position: relative;
    }

    .project-card img {
        width: 100%;
        border-radius: 10px;
    }

    .project-card h4 {
        color: #66fcf1;
        font-size: 24px;
        margin-top: 15px;
    }

    .project-card p {
        font-size: 16px;
        color: #c5c6c7;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .tags {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    .tags span {
        background-color: #45a29e;
        color: #0b0c10;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 14px;
    }

    .icon-container {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .github-icon {
        width: 30px;
        height: 30px;
        opacity: 0.8;
        transition: opacity 0.3s ease;
        color: white;
    }

    .github-icon:hover {
        opacity: 1;
    }
`;

export default ProjectSection;
