import { FaGithub } from 'react-icons/fa';
import { project } from '../types';
import styles from "../views/sections/css/Projects.module.css"
import { Link } from 'react-router-dom';

type CardsProps = {
    project: project
    index: number
};

function Cards({ project, index }: CardsProps) {
    return (
        <>
            <div className={styles.projectCard}>
                <div className={styles.iconContainer}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.githubIcon} />
                    </a>
                </div>
                <img src={`./Proyecto_${index + 1}/${project.img}.png`} alt={project.name} />
                <h4>{project.name}</h4>
                <p>{project.shortDescription} </p><Link to={`/proyecto/${index + 1}`} className={styles.verMas}>Ver mas...</Link>
                <div className={styles.tags}>
                    {project.tecnologies.map((tech, techIndex) => (
                        <span key={techIndex}>#{tech}</span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cards;
