const Engineer = require("../lib/Engineer");

it("fetches the employees GitHub username from the constructor", () => {
    const employee = new Engineer("David", "001", "david@company.com", "gitUsername");
    expect(employee.github).toBe("gitUsername");
})

it("fetches the employees GitHub username from the getGithub() method", () => {
    const employee = new Engineer("David", "001", "david@company.com", "gitUsername");
    expect(employee.getGithub()).toBe("gitUsername");
}) 

it("fetches the employees role from the getRole() method", () => {
    const role = "Engineer";
    const employee = new Engineer("David", "001", "david@company.com", "gitUsername");
    expect(employee.getRole()).toBe(role);
}) 