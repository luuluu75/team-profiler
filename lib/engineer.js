// Code to define and export the Engineer class. This class inherits from Employee.
const employee = require("./employee.js");

class engineer extends employee {
    constructor(name, id, email, github) {
        // Employee constructors are name, id, email
        super(name, id, email);

        // Constructors unique to Engineer
        this.github = github;
        // Override "Employee" role from parent Employee class
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = engineer;