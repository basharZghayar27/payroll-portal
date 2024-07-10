import { IEmployee } from "../types/Employee";

export class Employee {
  private employees: IEmployee[] = [];
  private nextId: number = 1;

  constructor() {
    this.employees = [
      {
        id: this.nextId++,
        name: 'John Doe',
        joiningDate: new Date('2024-07-07'),
        basicSalary: 3000,
        salaryAllowances: 300,
      },
    ];
  }

  createEmployee(employeeData: Omit<IEmployee, 'id'>): IEmployee {
    const newEmployee: IEmployee = {
      id: this.nextId++,
      ...employeeData,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  updateEmployee(id: number, updatedData: Partial<IEmployee>): IEmployee | undefined {
    const employeeIndex = this.employees.findIndex(emp => emp.id === id);
    if (employeeIndex !== -1) {
      this.employees[employeeIndex] = {
        ...this.employees[employeeIndex],
        ...updatedData,
      };
      return this.employees[employeeIndex];
    }
    return undefined;
  }

  deleteEmployee(id: number): boolean {
    const employeeIndex = this.employees.findIndex(emp => emp.id === id);
    if (employeeIndex !== -1) {
      this.employees.splice(employeeIndex, 1);
      return true;
    }
    return false;
  }

  getEmployees(): IEmployee[] {
    return this.employees;
  }

  getEmployeeById(id: number): IEmployee | undefined {
    return this.employees.find(emp => emp.id === id);
  }
}
