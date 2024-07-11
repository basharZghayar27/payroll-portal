import { combineReducers } from '@reduxjs/toolkit';
import employeeReducer from './employees-store/employeeReducer';

const rootReducer = combineReducers({
  employees: employeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;