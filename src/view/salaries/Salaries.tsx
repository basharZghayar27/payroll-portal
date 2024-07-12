import React, { useEffect, useState } from "react";
import { Table, Form, Button, Spin, Row, Col, Typography } from "antd";
import { getColumns } from "./columns";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchEmployees } from "../../store/employees-store/employeesAction";
import { ISalaryData } from "../../types/salaries";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "../../utils/constants";

const SalariesPage: React.FC = () => {
  const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const employees = useSelector((state: RootState) => state.employees.employees);
	const loading = useSelector((state: RootState) => state.employees.loading);
	const [form] = Form.useForm();

	const [data, setData] = useState<ISalaryData[]>([]);
	const [isEditable, setIsEditable] = useState<boolean>(false);
	const [totalPayableAmount, setTotalPayableAmount] = useState<number>(0);

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
					total: 0,
				};
			})
		);
	}, [employees]);

	const onFinish = (values: ISalaryData[]) => {
		const updatedData = data.map((item, index) => ({
			...item,
			...values[index],
			total: item.basicSalary + item.salaryAllowances + values[index]?.additions - values[index]?.deductions,
		}));
		setData(updatedData);
		setIsEditable(false);
	};

	const columns = getColumns(isEditable);
	const getTotalPayableAmount = () => {
		let payableAmount = 0;
		for (let record of data) {
			if (record.monthYear) {
				payableAmount += record.total;
			}
		}
		return payableAmount;
	};
	const makePayment = () => {
		/**
		 * This should call a backend API to save the payment information
		 * Will make fake resemble as if the payment is done then the data should be reset and
		 * show the table prepared for a new payment.
		 */
		setData(
			employees.map((e) => {
				return {
					...e,
					additions: 0,
					deductions: 0,
					monthYear: undefined,
					isEndOfService: false,
					total: 0,
				};
			})
		);
    form.resetFields()
	};
	useEffect(() => {
		setTotalPayableAmount(getTotalPayableAmount);
	}, [data]);
	return (
		<Spin size='small' spinning={loading}>
			<Row justify={"space-between"}>
				<Col md={22}>
					<Typography.Title level={3}>
						<>
							{"Total Payment: " + totalPayableAmount + " AED "}
							<Button
								type='primary'
								onClick={() => {
									makePayment();
								}}
								disabled={totalPayableAmount === 0}
							>
								{"Make payment"}
							</Button>
							<Button
								type='link'
								onClick={() => {
									navigate(routesConstant.paymentHistory);
								}}
							>
								{"Show payment history"}
							</Button>
						</>
					</Typography.Title>
				</Col>
				<Col md={2}>
					<Button
						type='primary'
						onClick={() => {
							onFinish(form.getFieldsValue(true));
							setIsEditable(!isEditable);
						}}
						style={{ marginBottom: 12, marginTop: 24 }}
					>
						{isEditable ? "Save Changes" : "Edit Salaries"}
					</Button>
				</Col>
			</Row>

			<Form form={form} onFinish={() => onFinish(form.getFieldsValue(true))}>
				<Table dataSource={data} columns={columns} rowKey='id' pagination={false} />
				{isEditable && (
					<Form.Item>
						<Button type='primary' htmlType='submit' style={{ marginTop: 16 }}>
							{"Save Changes"}
						</Button>
					</Form.Item>
				)}
			</Form>
		</Spin>
	);
};

export default SalariesPage;
