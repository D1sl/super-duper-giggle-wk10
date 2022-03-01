const generateTeam = team => {

    const generateManager = manager => {

        return `
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">${manager.getName()}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h5>
            <p class="card-text">ID: ${manager.getId()}</p>
            <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
            <p class="card-text">Office number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>
        `

    }

    const generateEngineer = engineer => {

        return `
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">${engineer.getName()}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h5>
            <p class="card-text">ID: ${engineer.getId()}</p>
            <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
            <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a></p>
        </div>
    </div>
        `

    }

    const generateIntern = intern => {

        return `
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">${intern.getName()}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h5>
            <p class="card-text">ID: ${intern.getId()}</p>
            <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
            <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
    </div>
        `

    }

    const htmlcontent = [];

    htmlcontent.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    htmlcontent.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    htmlcontent.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return htmlcontent.join("");


}

module.exports = team => {

    return `
    
    <!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <title>Hello, world!</title>
    </head>
    
    <body>
        <div class="navbar navbar-dark bg-dark mb-5">
            <h1 class="navbar-brand mb-0 h1 w-100 text-center">Hello, world!</h1>
        </div>
        <div class="container">
            <div class="col-12">
            ${generateTeam(team)}
            </div>
        </div>
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    
    </body>
    
    </html>
        `;

}