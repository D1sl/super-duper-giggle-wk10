// Require modules
const inquirer = require("inquirer");
const fs = require("fs");

// Require objects
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const makePage = require("./lib/makepage");

const teamData = [];

const createManager = () => {
    console.clear();
    console.log(`
    
╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯

  == 𝗦𝗧𝗘𝗣 𝟭 ===================
   ＣＲＥＡＴＥ ＭＡＮＡＧＥＲ
  =============================
`)
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

const createEmployee = () => {
    console.clear();
    console.log(`
    
╭━━━━╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╭━╮╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭╮╭╮┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱┃╭╯┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
╰╯┃┃┣┻━┳━━┳╮╭╮┃╰━╯┣━┳━━┳╯╰┳┫┃╭━━╮┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮
╱╱┃┃┃┃━┫╭╮┃╰╯┃┃╭━━┫╭┫╭╮┣╮╭╋┫┃┃┃━┫┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯
╱╱┃┃┃┃━┫╭╮┃┃┃┃┃┃╱╱┃┃┃╰╯┃┃┃┃┃╰┫┃━┫┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃
╱╱╰╯╰━━┻╯╰┻┻┻╯╰╯╱╱╰╯╰━━╯╰╯╰┻━┻━━╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯

  == 𝗦𝗧𝗘𝗣 𝟭 ⎷ ==================
  == 𝗦𝗧𝗘𝗣 𝟮 ====================
   ＣＲＥＡＴＥ ＥＭＰＬＯＹＥＥ
  ==============================
`)
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Choose the employee role",
                    name: "role",
                    choices: ["Engineer", "Intern", {
                        name: "Done",
                        value: false
                    }]
                },
                {
                    type: "input",
                    message: "Enter the employees name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Enter the employees ID",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Enter the employees email",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Enter the employees school",
                    name: "school",
                    when: ({ role }) => role === "Intern"
                },
                {
                    type: "input",
                    message: "Enter the employees GitHub username",
                    name: "github",
                    when: ({ role }) => role === "Engineer"
                },
            ])
            .then(answers => {
                if (answers.role) {
                    switch (answers.role) {
                        case "Intern":
                            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                            teamData.push(intern);

                            break;
                        case "Engineer":
                            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                            teamData.push(engineer);

                            break;
                    }
                    return createEmployee().then(() => resolve());
                } else {
                    return resolve();
                }
            })
    })
}

const createHtml = (html) => {
    fs.writeFile("./dist/")
}

createManager().then(() => {
    return createEmployee();
}).then(() => {
    const htmlData = makePage(teamData)
    createH(teamData);
}).then((console.log(makePage)));