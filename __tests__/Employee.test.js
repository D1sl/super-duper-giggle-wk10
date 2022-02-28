const Employee = require('../lib/Employee')

it("returns employee's name as a string", () => {
    const employee = new Employee("David");
    expect (employee.name).toBe("David");
});