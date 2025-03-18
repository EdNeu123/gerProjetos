const projects = [];
let nextProjectId = 1;

class Project {
    constructor(name, description) {
        this.id = nextProjectId++;
        this.name = name;
        this.description = description;
    }

    save() {
        projects.push(this);
    }

    static fetchAll() {
        return projects;
    }

    static update(id, name, description) {
        const project = projects.find(p => p.id === id);
        if (project) {
            project.name = name;
            project.description = description;
            return project;
        }
        return null;
    }

    static delete(id) {
        const index = projects.findIndex(p => p.id === id);
        if (index !== -1) {
            projects.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = Project;
