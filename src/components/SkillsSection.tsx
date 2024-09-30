import styled from 'styled-components';
import { skills } from '../data/skills';

function SkillsSection() {
  return (
    <SkillsSectionStyles>
        <h2>Skills</h2>
        <div className="skill-cards">
            {skills.map(skill => (
                <div key={skill.tecnologia}className="card-tec">
                    <img src={`./${skill.img}.png`} alt="html"/>
                    <p>{skill.tecnologia}</p>
                </div>
            ))}
        </div>
      </SkillsSectionStyles>
  )
}

const SkillsSectionStyles = styled.section`
    padding: 50px;
    background-color: #000;
    text-align: center;
    color: #333;

    h2 {
        font-size: 36px;
        color: #45a29e;
        margin-bottom: 30px;
    }

    .skill-cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    .card-tec {
        background-color: #1f2833;
        border-radius: 10px;
        padding: 20px;
        width: 150px;
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        text-align: center;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;
    }

    .card-tec img {
        max-width: 80px;
        max-height: 80px;
        margin-bottom: 15px;
        object-fit: contain;
    }

    .card-tec p {
        font-size: 18px;
        color: white;
    }

    .card-tec:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }
`;

export default SkillsSection