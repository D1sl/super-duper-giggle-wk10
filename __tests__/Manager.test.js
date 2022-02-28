const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

it("Sets the office number using the constructor", () => {
    const employee = new Manager("David", "001", "david@company.com", "101");
    expect(employee.officeNumber).toBe("101");
})

it("fetches the office number from the getOfficeNumber method", () => {
    const employee = new Manager("David", "001", "david@company.com", "101");
    expect(employee.getOfficeNumber()).toBe("101");
})

it("fetches the employees role from the getRole() method", () => {
    const role = "Manager";
    const employee = new Manager("David", "001", "david@company.com", "101");
    expect(employee.getRole()).toBe(role);
}) 