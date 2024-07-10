import React from "react";
import { TeamOutlined, DollarOutlined, DashboardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export const menuKeys = {
	dashboard: "dashboard",
	employees: "employees",
	salaries: "salaries",
};

export const menuItems = [
	{
		key: menuKeys.dashboard,
		icon: <DashboardOutlined />,
    label: <Link to={`/${menuKeys.dashboard}`}>{'Dashboard'}</Link>  
	},
	{
		key: menuKeys.employees,
		icon: <TeamOutlined />,
    label: <Link to={`/${menuKeys.employees}`}>{'Employees'}</Link> 
	},
	{
		key: menuKeys.salaries,
		icon: <DollarOutlined />,
    label: <Link to={`/${menuKeys.salaries}`}>{'Salaries'}</Link> 
	},
];
