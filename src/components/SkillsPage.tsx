
import skills from "../assets/skills.json";
import SkillTile from "./SkillTile";
function Skills() {

  return (
    <>
      <h1 className="h1 text-center border-bottom border-dark border-2 ms-5 me-5">
        Skills
      </h1>
      {skills.skills.length === 0 && <p>No Skills found</p>}
      <ul className="list-group">
        {skills.skills.map((skill) => (
          <SkillTile skill={skill}/>
        ))}
      </ul>
    </>
  );
}

export default Skills;
