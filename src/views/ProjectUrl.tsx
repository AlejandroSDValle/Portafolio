import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";

export default function ProjectUrl() {
  const { projectId } = useParams(); 

  if (!projectId) {
    return <h2>Proyecto no encontrado</h2>;
  }

  const project = projects.find((p) => p.id === +projectId);

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <ProjectDetail
      project={project}
    />
  );
}
