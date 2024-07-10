import React from "react";
import { Button, Col, Layout, Row, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

export type TAppHeader = {
	collapsed: boolean;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const AppHeader = ({ collapsed, setCollapsed }: TAppHeader) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<React.Fragment>
			<Layout style={{ maxHeight: "64px" }}>
				<Header style={{ padding: "16px 0px", background: colorBgContainer }}>
					<Row align={"middle"} justify={"space-between"}>
						<Col sm={1}>
							<Button
								type='text'
								icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
								onClick={() => setCollapsed(!collapsed)}
								style={{
									fontSize: "16px",
									// width: 64,
									// height: 64,
								}}
							/>
						</Col>
						<Col sm={23}>Header</Col>
					</Row>
				</Header>
			</Layout>
		</React.Fragment>
	);
};
export default AppHeader;
