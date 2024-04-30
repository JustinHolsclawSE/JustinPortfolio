import projectItems from "../assets/projectItems.json";
import ProjectTile from "./ProjectTile";
//import project from "../model/project";

function Projects() {
    // const projectList = 
    //     projectItems.projectItems.map( (project) => {
    //         project
    //     })

    return(
        <>
            <h1 className="d-flex row justify-content-center">Projects</h1>
            {
                projectItems.projectItems.map((project) => 
                    <ProjectTile title = {project.title} programminglanguage={project.programminglanguage} githuburl = {project.githuburl} description={project.description}/>
                )
            }
        </>      
    )
}

export default Projects