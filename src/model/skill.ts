class skill{
    name: string;
    description: string;
    experience: string;
    active: boolean;

    constructor(name:string, description: string, experience: string, active: boolean){
        this.name = name;
        this.description = description;
        this.experience = experience;
        this.active = active
    }
}

export default skill;