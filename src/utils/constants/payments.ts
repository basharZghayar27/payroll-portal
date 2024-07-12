import { IPaymentHistory } from "../../types/payments";

let paymentHistory: IPaymentHistory[] = [
  {
    id: 1,
    monthYear: new Date('2023-01-01'),
    totalAmount: 260000,
    details: [
      { employeeId: 1, additions: 5000, deductions: 0, totalPaid: 65000 },
      { employeeId: 2, additions: 6000, deductions: 0, totalPaid: 75000 },
      { employeeId: 3, additions: 7000, deductions: 0, totalPaid: 74000 },
      { employeeId: 4, additions: 3000, deductions: 0, totalPaid: 65000 },
      { employeeId: 5, additions: 4000, deductions: 0, totalPaid: 72000 },
    ],
  },
  {
    id: 2,
    monthYear: new Date('2023-02-01'),
    totalAmount: 258500,
    details: [
      { employeeId: 1, additions: 5000, deductions: 0, totalPaid: 65000 },
      { employeeId: 2, additions: 6000, deductions: 500, totalPaid: 74500 },
      { employeeId: 3, additions: 7000, deductions: 500, totalPaid: 73500 },
      { employeeId: 4, additions: 3000, deductions: 0, totalPaid: 65000 },
      { employeeId: 5, additions: 4000, deductions: 500, totalPaid: 71500 },
    ],
  },
  {
    id: 3,
    monthYear: new Date('2023-03-01'),
    totalAmount: 264000,
    details: [
      { employeeId: 1, additions: 5000, deductions: 0, totalPaid: 65000 },
      { employeeId: 2, additions: 6000, deductions: 0, totalPaid: 75000 },
      { employeeId: 3, additions: 7000, deductions: 0, totalPaid: 74000 },
      { employeeId: 4, additions: 3000, deductions: 0, totalPaid: 65000 },
      { employeeId: 5, additions: 4000, deductions: 0, totalPaid: 72000 },
    ],
  },
  {
    id: 4,
    monthYear: new Date('2023-04-01'),
    totalAmount: 263500,
    details: [
      { employeeId: 1, additions: 5000, deductions: 0, totalPaid: 65000 },
      { employeeId: 2, additions: 6000, deductions: 500, totalPaid: 74500 },
      { employeeId: 3, additions: 7000, deductions: 0, totalPaid: 74000 },
      { employeeId: 4, additions: 3000, deductions: 0, totalPaid: 65000 },
      { employeeId: 5, additions: 4000, deductions: 500, totalPaid: 71500 },
    ],
  },
  {
    id: 5,
    monthYear: new Date('2023-05-01'),
    totalAmount: 262500,
    details: [
      { employeeId: 1, additions: 5000, deductions: 0, totalPaid: 65000 },
      { employeeId: 2, additions: 6000, deductions: 0, totalPaid: 75000 },
      { employeeId: 3, additions: 7000, deductions: 500, totalPaid: 73500 },
      { employeeId: 4, additions: 3000, deductions: 0, totalPaid: 65000 },
      { employeeId: 5, additions: 4000, deductions: 500, totalPaid: 71500 },
    ],
  }
];

export default paymentHistory