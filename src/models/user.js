const users = [];

class User {
    constructor(name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    save() {
        users.push(this);
    }

    static fetchAll() {
        return users;
    }
}

module.exports = User;
