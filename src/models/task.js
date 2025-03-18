const tasks = [];
let nextTaskId = 1;

class Task {
    constructor(title, status, projectId, userId) {
        this.id = nextTaskId++;
        this.title = title;
        this.status = status; // true para concluída, false para pendente
        this.projectId = projectId;
        this.userId = userId;
    }

    save() {
        tasks.push(this);
    }

    static fetchAll() {
        return tasks;
    }

    static update(id, title, status) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            if (title !== undefined) task.title = title;
            if (status !== undefined) task.status = status;
            return task;
        }
        return null;
    }

    static delete(id) {
        const index = tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = Task;
