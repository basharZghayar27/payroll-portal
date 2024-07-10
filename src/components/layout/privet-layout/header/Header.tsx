import React from "react";
import { Button, Col, Flex, Layout, Row, theme, Tooltip } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../../../../context/AuthContext";
const { Header } = Layout;

export type TAppHeader = {
	collapsed: boolean;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const AppHeader = ({ collapsed, setCollapsed }: TAppHeader) => {
	const { logout } = useAuth();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<React.Fragment>
			<Layout style={{ maxHeight: "64px" }}>
				<Header style={{ padding: "0px 16px 0 0", background: colorBgContainer }}>
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
						<Col sm={23}>
							<Flex justify='flex-end'>
								<Tooltip placement='left' title={<span>Logout the system</span>}>
									<LogoutOutlined onClick={() => logout()} />
								</Tooltip>
							</Flex>
						</Col>
					</Row>
				</Header>
			</Layout>
		</React.Fragment>
	);
};
export default AppHeader;
