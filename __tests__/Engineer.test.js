const Engineer = require("../lib/Engineer");

it("fetches the GitHub from the constructor", () => {
    const employee = new Engineer("David", "001", "david@company.com", "gitUsername");
    expect(employee.github).toBe("gitUsername");
})