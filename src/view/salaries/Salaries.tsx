import React, { useEffect, useState } from "react";
import { Table, Form, Button, Spin, Row, Col } from "antd";
import { getColumns } from "./columns";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchEmployees } from "../../store/employees-store/employeesAction";
import { ISalaryData } from "../../types/salaries";


const SalariesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );
  const loading = useSelector((state: RootState) => state.employees.loading);
  const [form] = Form.useForm();

  const [data, setData] = useState<ISalaryData[]>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await dispatch(fetchEmployees());
    })();
  }, [dispatch]);

  useEffect(() => {
    setData(
      employees.map((e) => {
        return {
          ...e,
          additions: 0,
          deductions: 0,
          monthYear: undefined,
          isEndOfService: false,
          total: 60000,
        };
      })
    );
  }, [employees]);

  const onFinish = (values: ISalaryData[]) => {
    const updatedData = data.map((item, index) => ({
      ...item,
      ...values[index],
      total:
        item.basicSalary +
        item.salaryAllowances +
        values[index]?.additions -
        values[index]?.deductions,
    }));
    setData(updatedData);
    setIsEditable(false);
  };

  const columns = getColumns(isEditable);

  return (
    <Spin size="small" spinning={loading}>
      <Row justify={"end"}>
        <Col>
          <Button
            type="primary"
            onClick={() => {
              onFinish(form.getFieldsValue(true));
              setIsEditable(!isEditable);
            }}
            style={{ marginBottom: 16 }}
          >
            {isEditable ? "Save Changes" : "Edit Salaries"}
          </Button>
        </Col>
      </Row>

      <Form form={form} onFinish={() => onFinish(form.getFieldsValue(true))}>
        <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
        {isEditable && (
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
              Save Changes
            </Button>
          </Form.Item>
        )}
      </Form>
    </Spin>
  );
};

export default SalariesPage;
