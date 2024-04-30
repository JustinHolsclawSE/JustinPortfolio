class project{
    title: string;
    description: string;
    programminglanguage: string;
    githuburl: string;

    constructor(title:string, description: string, programminglanguage: string, githuburl: string){
        this.title = title;
        this.description = description;
        this.programminglanguage = programminglanguage;
        this.githuburl = githuburl;
    }
}

export default project;