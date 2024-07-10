import React from "react";
import { Col, Layout, Row, theme} from "antd";
const {Header} = Layout;
const Headers = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <React.Fragment>
      <Layout >
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row gutter={16} align={"middle"} justify={"space-between"}>
            <Col sm={3}>Logo</Col>
            <Col sm={21}>Header</Col>
          </Row>
        </Header>
      </Layout>
    </React.Fragment>
  );
};
export default Headers;
