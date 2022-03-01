// Require modules
const inquirer = require("inquirer");
const fs = require("fs");

// Require objects
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const makePage = require("./lib/makepage");

const teamData = [];

function app() {

    function createTeam() {
        console.clear();
        console.log(`
        
    ╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
    ┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
    ╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
    ╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
    ╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
    ╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯
    
    
    `)
        inquirer
            .prompt([{
                type: "list",
                message: "What type of employee would you like to create?",
                name: "createEmployee",
                choices: ["Manager", "Engineer", "Intern", "No more employees"]
            }]).then(function (choice) {
                switch (choice.createEmployee) {
                    case "Manager":
                        createManager();
                        break;
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        makePage();
                }
            })
    }

    function createManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Enter managers name"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Enter managers ID",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Enter managers email"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Enter office number"
                }
            ]).then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
                teamData.push(manager);
                console.log(teamData);
            });
    }


    createTeam();

}

// const createHtml = (html) => {
//     fs.writeFile("./dist/index.html", html, (err) => {
//         if(err) throw err;
//     });
// }
app();
// .then(() => {
//     const htmlData = makePage(teamData)
//     createHtml(htmlData);
// })