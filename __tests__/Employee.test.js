const Employee = require('../lib/Employee')

// Test that constructor works
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

// Check that methods work
it("fetches the employee's name via the getName() method", () => {
    const employee = new Employee("David");
    expect(employee.getName()).toBe("David");
})

it("fetches the employee's ID via the getId() method", () => {
    const employee = new Employee("David", "001");
    expect(employee.getId()).toBe("001");
})

it("fetches the employee's email via the getEmail() method", () => {
    const employee = new Employee("David", "001", "david@company.com");
    expect(employee.getEmail()).toBe("david@company.com");
})

it("fetches the employee's role via the getRole() method", () => {
    const employee = new Employee("David", "001", "david@company.com", "Employee");
    expect(employee.getRole()).toBe("Employee");
})