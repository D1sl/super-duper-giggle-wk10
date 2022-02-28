const Engineer = require("../lib/Engineer");

it("fetches the employees GitHub username from the constructor", () => {
    const employee = new Engineer("David", "001", "david@company.com", "gitUsername");
    expect(employee.githubUsername).toBe("gitUsername");
})