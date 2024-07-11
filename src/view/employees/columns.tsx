import React from "react";
import { Space, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { IEmployee } from "../../utils/types/Employee";

interface ColumnsProps {
	onDelete: (record: IEmployee) => void;
	onEdit: (record: IEmployee) => void;
}

export const getColumns = ({ onDelete, onEdit }: ColumnsProps) => {
	const columns: ColumnsType<IEmployee> = [
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Join Date",
			dataIndex: "joiningDate",
			key: "joiningDate",
			render: (text: Date) => <div>{text.toLocaleDateString()}</div>,
		},
		{
			title: "Basic salary",
			dataIndex: "basicSalary",
			key: "basicSalary",
		},
		{
			title: "Salary allowance",
			dataIndex: "salaryAllowances",
			key: "salaryAllowances",
		},
		{
			title: "Action",
			key: "action",
			render: (_: any, record: IEmployee) => (
				<Space size='small'>
					<Typography.Link onClick={() => onEdit(record)}>Edit </Typography.Link>
					<Typography.Link onClick={() => onDelete(record)}>Delete</Typography.Link>
				</Space>
			),
		},
	];

	return columns;
};
