import React, { useEffect } from 'react';
import { Modal, Form, Input, DatePicker, Button } from 'antd';
import { IEmployee } from '../../utils/types/Employee';
import moment from 'moment';

interface EmployeeModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (employee: Omit<IEmployee, 'id'>, id?: number) => void;
  employee?: IEmployee;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({ visible, onClose, onSubmit, employee }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        ...employee,
        joiningDate: employee.joiningDate ? moment(employee.joiningDate) : null,
      });
    } else {
      form.resetFields();
    }
  }, [employee, form]);

  const handleFinish = (values: any) => {
    onSubmit({
      ...values,
      joiningDate: values.joiningDate ? new Date(values.joiningDate) : null,
    }, employee?.id);
    form.resetFields();
  };

  return (
    <Modal
      open={visible}
      title={employee ? 'Edit Employee' : 'Add Employee'}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter the employee name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="joiningDate"
          label="Joining Date"
          rules={[{ required: true, message: 'Please select the joining date' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="basicSalary"
          label="Basic Salary"
          rules={[{ required: true, message: 'Please enter the basic salary' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="salaryAllowances"
          label="Salary Allowances"
          rules={[{ required: true, message: 'Please enter the salary allowances' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {employee ? 'Update' : 'Create'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EmployeeModal;
