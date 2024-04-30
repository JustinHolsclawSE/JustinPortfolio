import { useState } from "react";
import skill from "../model/skill";

function SkillTile({skill}:any) {
  //const [currentSkill, setCurrentSkill] = useState(skill.active)
  // function showDropdown() {
  //   if (currentSkill === true) {
      return (
        <>
          <div className="d-flex border-bottom border-dark border-2 pb-2 ms-5 me-5">
              <img className="col-sm-1 img-fluid" src={skill.logo}></img>
            <div className="col ps-3">
              <p className="h1">{skill.name}</p>
              {/* {skill.name} <i className="bi bi-caret-up" /> */}
              <p className="">{skill.description}</p>
            </div>
          </div>
        </>
      );
  //   } else {
  //     return (
  //       <p className="h2">
  //         {skill.name} <i className="bi bi-caret-down-fill" />
  //       </p>
  //     );
  //   }
  // }

  // return (
  //   <li
  //     key={skill.name}
  //     onClick={() => {
  //       if (currentSkill === false) {
  //         setCurrentSkill(true);
  //       } else {
  //         setCurrentSkill(false);
  //       }
  //     }}>
  //     {showDropdown()}
  //   </li>
  // );
}

export default SkillTile;
