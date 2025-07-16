import styles from "./css/Skill.module.css";
import { skills } from '../../data/skills';

const categorias = ["Backend", "DevOps", "Base de Datos", "Frontend"];

function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Tecnologías y Herramientas</h2>
      {categorias.map((categoria) => (
        <div key={categoria}>
          <h3 className={styles.categoria}>{categoria}</h3>
          <div className={styles.skillCards}>
            {skills
              .filter(skill => skill.categoria === categoria)
              .map(skill => (
                <div key={skill.tecnologia} className={styles.cardTec}>
                  <img src={`./skills/${skill.img}.png`} alt={skill.tecnologia} />
                  <p>{skill.tecnologia}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
