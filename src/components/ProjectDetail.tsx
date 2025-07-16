import { Link } from "react-router-dom";
import { project } from "../types";
import styles from "./styles/ProjectDetail.module.css"
import Header from "../views/sections/Header";
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import React from "react";

type ProjectDetailProps = {
  project: project
};


function ProjectDetail({ project }: ProjectDetailProps) {

  const totalProjects = projects.length;

  const renderDescripcion = (descripcion: string): React.ReactNode[] => {
    const linkRegex = /<Link to="([^"]+)">([^<]+)<\/Link>/g;
    const partes: React.ReactNode[] = [];
    let lastIndex = 0;

    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(descripcion)) !== null) {
      const fullMatch = match[0];
      const ruta = match[1];
      const texto = match[2];

      const textoAntes = descripcion.slice(lastIndex, match.index);

      // Añadir el texto anterior dividido por saltos de línea
      textoAntes.split("\n").forEach((linea, i) => {
        partes.push(
          <React.Fragment key={`${match!.index}-before-${i}`}>
            {linea}
            <br />
          </React.Fragment>
        );
      });

      // Añadir el Link de React Router
      partes.push(
        <Link key={`link-${match.index}`} to={ruta} className={styles.inlineLink}>
          {texto}
        </Link>
      );

      lastIndex = match.index + fullMatch.length;
    }

    // Añadir el resto del texto después del último Link
    const textoRestante = descripcion.slice(lastIndex);
    textoRestante.split("\n").forEach((linea, i) => {
      partes.push(
        <React.Fragment key={`rest-${i}`}>
          {linea}
          <br />
        </React.Fragment>
      );
    });

    return partes;
  };

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

        <p className={styles.descripcionProyecto}>
          {renderDescripcion(project.fullDescription)}
        </p>

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