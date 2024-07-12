import { InputNumber, Form, Checkbox, DatePicker } from 'antd';
import moment from 'moment';
import { ISalaryData } from '../../types/salaries';

export const getColumns = (isEditable: boolean) => {
  return [
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Basic Salary',
      dataIndex: 'basicSalary',
      key: 'basicSalary',
    },
    {
      title: 'Salary Allowance',
      dataIndex: 'salaryAllowances',
      key: 'salaryAllowances',
    },
    {
      title: 'Additions',
      dataIndex: 'additions',
      key: 'additions',
      editable: true,
      render: (text: number, record: ISalaryData, index: number) =>
        isEditable ? (
          <Form.Item name={[index, 'additions']} initialValue={record.additions}>
            <InputNumber />
          </Form.Item>
        ) : (
          text
        ),
    },
    {
      title: 'Deductions',
      dataIndex: 'deductions',
      key: 'deductions',
      editable: true,
      render: (text: number, record: ISalaryData, index: number) =>
        isEditable ? (
          <Form.Item name={[index, 'deductions']} initialValue={record.deductions}>
            <InputNumber />
          </Form.Item>
        ) : (
          text
        ),
    },
    {
      title: 'Month and Year',
      dataIndex: 'monthYear',
      key: 'monthYear',
      editable: true,
      render: (text: Date, record: ISalaryData, index: number) =>
        isEditable ? (
          <Form.Item name={[index, 'monthYear']} initialValue={moment(record.monthYear)}>
            <DatePicker picker="month" />
          </Form.Item>
        ) : (
          moment(text).format('MM/YYYY')
        ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (text: number, record: ISalaryData) =>
        record.basicSalary + record.salaryAllowances + record.additions - record.deductions,
    },
    {
      title: 'EOS',
      dataIndex: 'isEndOfService',
      key: 'isEndOfService',
      editable: true,
      render: (text: boolean, record: ISalaryData, index: number) =>
        isEditable ? (
          <Form.Item name={[index, 'isEndOfService']} valuePropName="checked" initialValue={record.isEndOfService}>
            <Checkbox />
          </Form.Item>
        ) : (
          text ? 'Yes' : 'No'
        ),
    },
  ];
};
