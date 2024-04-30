import project from "../model/project";

function ProjectTile ({title, programminglanguage, githuburl, description}:project){


    return(
        <>
            <div className="text-center">
                        <h1>{title}</h1>
                        <div className="d-flex flex-row justify-content-evenly">
                            <p>{programminglanguage}</p>
                            <p>{githuburl}</p>
                        </div>
                        <p>{description}</p>
                    </div>
        </>
    )
}

export default ProjectTile;