import { projects } from '../../data/projects';
import { Link } from "react-router-dom";
import styles from "./css/Projects.module.css"
import Cards from '../../components/Cards';

function Projects() {

    return (
        <div className={styles.projectsStyles}>
            <h2>Projects</h2>
            <Link to="/proyectos" className={styles.btnProjects}>Ver Todos los proyectos</Link>
            <div className={styles.sliderContainer}>
                {projects.slice(0, 6).map((project, index) => (
                    <Cards
                        key={project.name}
                        project={project}
                        index={index}
                    />

                ))}
            </div>
        </div>
    )
}

export default Projects