export interface IPaymentDetail {
  employeeId: number;
  additions: number;
  deductions: number;
  totalPaid: number;
} 

export interface IPaymentHistory {
  id: number;
  monthYear: Date;
  totalAmount: number;
  details: IPaymentDetail[];
}