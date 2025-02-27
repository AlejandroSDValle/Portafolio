import styles from "./css/Skill.module.css"
import { skills } from '../../data/skills';

function Skills() {
  return (
    <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillCards}>
            {skills.map(skill => (
                <div key={skill.tecnologia}className={styles.cardTec}>
                    <img src={`./skills/${skill.img}.png`} alt="html"/>
                    <p>{skill.tecnologia}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills