import { Link } from "react-router-dom";
import { project } from "../types";
import styles from "./styles/ProjectDetail.module.css"
import Header from "../views/sections/Header";
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
// import React from "react";

type ProjectDetailProps = {
  project: project
};


function ProjectDetail({ project }: ProjectDetailProps) {

  const totalProjects = projects.length;

  return (
    <>
      <Header />

      <div className={styles.projectsStyles}>
        <div className={styles.nav}>
          <Link to="/" className={styles.btnProjects}>Volver</Link>
          <div className={styles.paginacion}>
            {project.id > 1 && (
              <Link to={`/proyecto/${project.id - 1}`} className={styles.btnProjects}>
                Anterior proyecto
              </Link>
            )}

            {project.id < totalProjects && (
              <Link to={`/proyecto/${project.id + 1}`} className={styles.btnProjects}>
                Siguiente proyecto
              </Link>
            )}
          </div>

        </div>

        <h2>{project.name}</h2>
        <img src={`/Proyecto_${project.id}/${project.img}.png`} alt={project.name} />

        {/* <p className={styles.descripcionProyecto}>
          {project.fullDescription.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p> */}
        <div
          className={styles.descripcionProyecto}
          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
        />

        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.githubIcon} />
        </a>

        <div className={styles.imagenesContainer}>
          {project.imagenes.map((img, index) => (
            <div key={index} className={styles.imagenCard}>
              <img src={`/Proyecto_${project.id}/${img.imagen}.png`} alt={`Imagen_web_${project.name}`} />
              <p>{img.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectDetail