const Employee = require('../lib/Employee')

it("returns employee's name as a string", () => {
    const employee = new Employee("David");
    expect (employee.name).toBe("David");
});

it("returns employee's ID as a string", () => {
    const employee = new Employee("David", "001");
    expect (employee.id).toBe("001");
});

it("returns employee's email as a string", () => {
    const employee = new Employee("David", "001", "david@company.com");
    expect (employee.email).toBe("david@company.com");
});

it("returns employee's role as a string", () => {
    const employee = new Employee("David", "001", "david@company.com", "Employee");
    expect (employee.role).toBe("Employee");
});