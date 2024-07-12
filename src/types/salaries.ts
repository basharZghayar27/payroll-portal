import { IEmployee } from "./Employee";

export interface ISalaryData extends IEmployee {
  additions: number;
  deductions: number;
  monthYear: Date | undefined;
  isEndOfService: boolean;
  total: number;
}


