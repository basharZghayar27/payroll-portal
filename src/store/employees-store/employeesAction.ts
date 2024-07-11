import { createAsyncThunk } from '@reduxjs/toolkit';
import { Employee } from '../../server/employeeService';

import {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from './employeeReducer';
import { IEmployee } from '../../utils/types/Employee';

const employeeService = new Employee();

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, { dispatch }) => {
    dispatch(fetchEmployeesRequest());
    try {
      const employees = await employeeService.getEmployees();
      dispatch(fetchEmployeesSuccess(employees));
    } catch (error) {
      dispatch(fetchEmployeesFailure("Something went wrong"));
    }
  }
);

export const createEmployeeAsync = createAsyncThunk(
  'employees/createEmployee',
  async (employeeData: Omit<IEmployee, 'id'>, { dispatch }) => {
    const newEmployee = await employeeService.createEmployee(employeeData);
    dispatch(createEmployee(newEmployee));
  }
);

export const updateEmployeeAsync = createAsyncThunk(
  'employees/updateEmployee',
  async ({ id, updatedData }: { id: number; updatedData: Partial<IEmployee> }, { dispatch }) => {
    const updatedEmployee = await employeeService.updateEmployee(id, updatedData);
    if (updatedEmployee) {
      dispatch(updateEmployee(updatedEmployee));
    }
  }
);

export const deleteEmployeeAsync = createAsyncThunk(
  'employees/deleteEmployee',
  async (id: number, { dispatch }) => {
    const success = await employeeService.deleteEmployee(id);
    if (success) {
      dispatch(deleteEmployee(id));
    }
  }
);
