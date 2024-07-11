import { IEmployee } from '../../utils/types/Employee';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EmployeeState {
  employees: IEmployee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    fetchEmployeesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess(state, action: PayloadAction<IEmployee[]>) {
      state.loading = false;
      state.employees = action.payload;
    },
    fetchEmployeesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    createEmployee(state, action: PayloadAction<IEmployee>) {
      state.employees.push(action.payload);
    },
    updateEmployee(state, action: PayloadAction<IEmployee>) {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee(state, action: PayloadAction<number>) {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
});

export const {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
