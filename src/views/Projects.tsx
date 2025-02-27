import Header from "./sections/Header"
import styles from "./sections/css/Projects.module.css"
import { projects } from '../data/projects';
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

function Projects() {
    return (
        <>
            <Header />
            <div className={styles.projectsStyles}>
                <h2>Projects</h2>
                <Link to="/" className={styles.btnProjects}>Volver</Link>
                <div className={styles.sliderContainer}>
                    {projects.map((project, index) => (
                        <Cards
                            key={project.name}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects