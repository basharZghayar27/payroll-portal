import React from "react";
import "./App.css";
// import Header from "./components/layout/header/Header";
import { ConfigProvider } from "antd";
import AppRoutes from "./components/routes";
const App: React.FC = () => {
	const [primary, setPrimary] = React.useState("#1677ff");
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: primary,
					colorBgBase: "#fff",
				},
				// algorithm: ()
			}}
		>
			<AppRoutes />
		</ConfigProvider>
	);
};

export default App;
