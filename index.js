// Require modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");

// Require objects
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateTeam = require("./lib/makepage.js");

const savePath = path.join(OUTPUT_DIR, "team.html");

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
    
    === CHOOSE EMPLOYEE TYPE ==================================
    
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
                        saveHtml();
                }
            })
    }

    function createManager() {

        console.clear();
        console.log(`
        
    ╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
    ┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
    ╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
    ╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
    ╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
    ╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯
    
    === CHOOSE EMPLOYEE TYPE ==================================
    ===== > NEW MANAGER =======================================
    
    `)

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "mName",
                    message: "Enter managers name"
                },
                {
                    type: "input",
                    name: "mId",
                    message: "Enter managers ID",
                },
                {
                    type: "input",
                    name: "mEmail",
                    message: "Enter managers email"
                },
                {
                    type: "input",
                    name: "mOfficeNumber",
                    message: "Enter office number"
                }
            ]).then(answers => {
                const manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.mOfficeNumber);
                teamData.push(manager);
                createTeam();
            });
    }

    function createEngineer() {
        
        console.clear();
        console.log(`
        
    ╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
    ┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
    ╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
    ╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
    ╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
    ╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯
    
    === CHOOSE EMPLOYEE TYPE ==================================
    ===== > NEW ENGINEER ======================================
    
    `)

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter engineers name"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter engineers ID",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter engineers email"
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter engineers github"
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamData.push(engineer);
                createTeam();
            });
    }

    function createIntern() {

        console.clear();
        console.log(`
        
    ╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
    ┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
    ╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
    ╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
    ╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
    ╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯
    
    === CHOOSE EMPLOYEE TYPE ==================================
    ===== > NEW INTERN ========================================
    
    `)

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter interns name"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter interns ID",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter interns email"
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter interns school"
                }
            ]).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.github);
                teamData.push(intern);
                createTeam();
            });
            
    }


    createTeam();

    function saveHtml() {
        fs.writeFileSync(savePath, generateTeam(teamData), "UTF-8");
        console.clear();
        console.log(`
        
    ╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
    ┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
    ╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
    ╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
    ╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
    ╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯
    
    === THE TEAM PROFILE PAGE HAS BEEN SUCCESSFULLY GENERATED ===
    `)
    }

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