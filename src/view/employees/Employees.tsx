import { Button, Col, Row, Space, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
	createEmployeeAsync,
	deleteEmployeeAsync,
	fetchEmployees,
	updateEmployeeAsync,
} from "../../store/employees-store/employeesAction";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getColumns } from "./columns";
import { IEmployee } from "../../utils/types/Employee";
import EmployeeModal from "../../components/employees/EmployeeModal";

const Employees: React.FC = () => {
	const dispatch = useAppDispatch();
	const employees = useSelector((state: RootState) => state.employees.employees);
	const loading = useSelector((state: RootState) => state.employees.loading);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState<IEmployee | null>(null);

	const openModal = (employee?: IEmployee) => {
		setSelectedEmployee(employee || null);
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
		setSelectedEmployee(null);
	};

	const handleSubmit = (employee: Omit<IEmployee, "id">, id?: number) => {
		if (id) {
			dispatch(updateEmployeeAsync({ id, updatedData: employee }));
		} else {
			dispatch(createEmployeeAsync(employee));
		}
		closeModal();
	};
	const handleDelete = (id: number) => {
		if (id) {
			dispatch(deleteEmployeeAsync(id));
		}
		closeModal();
	};

	useEffect(() => {
		(async () => {
			await dispatch(fetchEmployees());
		})();
	}, [dispatch]);

	return (
		<>
			<Spin size='small' spinning={loading}>
				<Row justify={"end"}>
					<Col>
						<Button type='primary' onClick={() => openModal()}>
							Add
						</Button>
					</Col>
				</Row>
				<Table
					dataSource={employees}
					columns={getColumns({
						onDelete: (record) => {
							handleDelete(record.id);
						},
						onEdit: (record) => {
							openModal(record);
						},
					})}
				/>
				<EmployeeModal
					visible={isModalVisible}
					onClose={closeModal}
					onSubmit={handleSubmit}
					employee={selectedEmployee || undefined}
				/>
			</Spin>
		</>
	);
};
export default Employees;
