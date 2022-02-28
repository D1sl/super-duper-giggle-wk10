const Intern = require("../lib/Intern");

it("fetches the employees school from the constructor", () => {
    const employee = new Intern("David", "001", "david@company.com", "Vanderbilt University");
    expect(employee.school).toBe("Vanderbilt University");
})

it("fetches the employees school from the getSchool() method", () => {
    const employee = new Intern("David", "001", "david@company.com", "Vanderbilt University");
    expect(employee.getSchool()).toBe("Vanderbilt University");
})