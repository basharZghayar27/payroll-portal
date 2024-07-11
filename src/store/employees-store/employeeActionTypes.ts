import { IEmployee } from "../../utils/types/Employee";

export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

interface FetchEmployeesRequestAction {
  type: typeof FETCH_EMPLOYEES_REQUEST;
}

interface FetchEmployeesSuccessAction {
  type: typeof FETCH_EMPLOYEES_SUCCESS;
  payload: IEmployee[];
}

interface FetchEmployeesFailureAction {
  type: typeof FETCH_EMPLOYEES_FAILURE;
  payload: string;
}

interface CreateEmployeeAction {
  type: typeof CREATE_EMPLOYEE;
  payload: IEmployee;
}

interface UpdateEmployeeAction {
  type: typeof UPDATE_EMPLOYEE;
  payload: IEmployee;
}

interface DeleteEmployeeAction {
  type: typeof DELETE_EMPLOYEE;
  payload: number;
}

export type EmployeeActionTypes =
  | FetchEmployeesRequestAction
  | FetchEmployeesSuccessAction
  | FetchEmployeesFailureAction
  | CreateEmployeeAction
  | UpdateEmployeeAction
  | DeleteEmployeeAction;
