// Code to define and export the Manager class. This class inherits from Employee.
const employee = require("./employee.js");

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        // Employee constructors are name, id, email
        super(name, id, email);

        // Constructors unique to Manager
        this.officeNumber = officeNumber;
        // Override "Employee" role from parent Employee class
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = manager;