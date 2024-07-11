import { Card, Col, Flex, Row, Spin, Typography } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "../utils/constants";
import { useSelector } from "react-redux";
import { fetchEmployees } from "../store/employees-store/employeesAction";
import { RootState } from "../store/store";
import { useAppDispatch } from "../store/hooks";

const Dashboard: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const employees = useSelector((state: RootState) => state.employees.employees);
	const loading = useSelector((state: RootState) => state.employees.loading);

	useEffect(() => {
		(async () => {
			await dispatch(fetchEmployees());
		})();
	}, [dispatch]);

	return (
		<>
			<Spin size='small' spinning={loading}>
				<Row>
					<Col md={12}>
						<Card hoverable onClick={() => navigate(routesConstant.employees, { replace: true })}>
							<Flex gap='middle' align='center' vertical>
								<Typography.Title level={1}>{"Employees"}</Typography.Title>
								<Typography.Title level={3}>{employees.length}</Typography.Title>
							</Flex>
						</Card>
					</Col>
					<Col md={12}></Col>
				</Row>
			</Spin>
		</>
	);
};

export default Dashboard;
