import React from "react";
import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
const boxStyle: React.CSSProperties = {
  width: '100%',
  minHeight: "100vh",
  borderRadius: 6,
};
export const PublicLayout = () => {
	return (
		<Layout style={{ minHeight: "100vh", backgroundColor: "#e4e2dd" }}>
			<Flex style={boxStyle} justify={'center'} align={'center'}>
				<Outlet />
			</Flex>
		</Layout>
	);
};
