// Require modules
const inquirer = require("inquirer");

// Require objects
const Manager = require("./lib/Manager");

const teamData = [];

const createManager = () => {
    console.clear();
    console.log(`
    ====================
       CREATE MANAGER 
    ====================`)
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter the managers name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Enter the managers ID",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Enter the managers email",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Enter the managers office number",
                    name: "officeNumber"
                },
            ])
            .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamData.push(manager);
                resolve();
            })
    })
}

createManager()