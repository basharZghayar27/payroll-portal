// PaymentHistory.tsx
import React, { useEffect, useState } from 'react';
import { Table, Modal, Button } from 'antd';
import moment from 'moment';
import { IPaymentHistory } from '../../types/payments';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchEmployees } from '../../store/employees-store/employeesAction';
import { useAppDispatch } from '../../store/hooks';
import { paymentHistory } from '../../utils/constants';

/**
 * This Component is Where user can see the history of all the payments in details for each month.
 */
const PaymentHistory: React.FC = () => {
	const dispatch = useAppDispatch();
  const employees = useSelector((state: RootState) => state.employees.employees);
  const [selectedPayment, setSelectedPayment] = useState<IPaymentHistory | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  useEffect(() => {
		(async () => {
			await dispatch(fetchEmployees());
		})();
	}, [dispatch]);
  
  const handleShowDetails = (payment: IPaymentHistory) => {
    setSelectedPayment(payment);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPayment(null);
  };

  const columns = [
    {
      title: 'Month and Year',
      dataIndex: 'monthYear',
      key: 'monthYear',
      render: (date: Date) => moment(date).format('MM/YYYY'),
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: IPaymentHistory) => (
        <Button onClick={() => handleShowDetails(record)}>Show Details</Button>
      ),
    },
  ];

  const detailColumns = [
    {
      title: 'Employee Name',
      dataIndex: 'employeeId',
      key: 'employeeName',
      render: (employeeId: number) => {
        const employee = employees.find(emp => emp.id === employeeId);
        return employee ? employee.name : '';
      },
    },
    {
      title: 'Basic Salary',
      dataIndex: 'employeeId',
      key: 'basicSalary',
      render: (employeeId: number) => {
        const employee = employees.find(emp => emp.id === employeeId);
        return employee ? employee.basicSalary : '';
      },
    },
    {
      title: 'Salary Allowance',
      dataIndex: 'employeeId',
      key: 'salaryAllowances',
      render: (employeeId: number) => {
        const employee = employees.find(emp => emp.id === employeeId);
        return employee ? employee.salaryAllowances : '';
      },
    },
    {
      title: 'Additions',
      dataIndex: 'additions',
      key: 'additions',
    },
    {
      title: 'Deductions',
      dataIndex: 'deductions',
      key: 'deductions',
    },
    {
      title: 'Total Paid',
      dataIndex: 'totalPaid',
      key: 'totalPaid',
    },
  ];

  return (
    <div>
      <Table dataSource={paymentHistory} columns={columns} rowKey="id" />

      <Modal
        title="Payment Details"
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Done
          </Button>,
        ]}
        style={{minWidth: '600px'}}
      >
        <Table
          dataSource={selectedPayment ? selectedPayment.details : []}
          columns={detailColumns}
          rowKey="employeeId"
          pagination={false}
        />
      </Modal>
    </div>
  );
};

export default PaymentHistory;
