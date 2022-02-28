const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

it("Sets the office number using the constructor", () => {
    const employee = new Manager("David", "001", "david@company.com", "101");
    expect(employee.officeNumber).toBe("101");
})