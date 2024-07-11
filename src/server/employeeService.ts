import { IEmployee } from "../utils/types/Employee";
import { employees } from "../utils/constants";

export class Employee {
  private employees: IEmployee[] = [];
  private nextId: number = 1;

  constructor() {
    this.employees = employees;
    this.nextId = this.employees.length + 1;
  }

  async createEmployee(
    employeeData: Omit<IEmployee, "id">
  ): Promise<IEmployee> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newEmployee: IEmployee = {
          id: this.nextId++,
          ...employeeData,
        };
        this.employees = [...this.employees, newEmployee];
        resolve(newEmployee);
      }, 500);
    });
  }

  async updateEmployee(
    id: number,
    updatedData: Partial<IEmployee>
  ): Promise<IEmployee | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const employeeIndex = this.employees.findIndex((emp) => emp.id === id);
        if (employeeIndex !== -1) {
          const updatedEmployees = this.employees.map((emp, index) =>
            index === employeeIndex ? { ...emp, ...updatedData } : emp
          );
          this.employees = updatedEmployees;
          resolve(this.employees[employeeIndex]);
        } else {
          resolve(undefined);
        }
      }, 500);
    });
  }

  async deleteEmployee(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const employeeIndex = this.employees.findIndex((emp) => emp.id === id);
        if (employeeIndex !== -1) {
          this.employees = this.employees.filter((emp) => emp.id !== id);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  }

  async getEmployees(): Promise<IEmployee[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.employees);
      }, 500);
    });
  }

  async getEmployeeById(id: number): Promise<IEmployee | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const employee = this.employees.find((emp) => emp.id === id);
        resolve(employee);
      }, 500);
    });
  }
}
