// Require modules
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");

// Require objects
const Manager = require("./lib/Manager");

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
                    choices: ["Engineer", "Intern"]
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
                }
            })
    })
}

createManager().then(() => {
    return createEmployee();
})