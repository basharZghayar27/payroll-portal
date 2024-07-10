import React, { useState } from 'react'
import { Layout } from 'antd'
import { SideMenu } from './side-menu/SideMenu';
import { Outlet } from 'react-router-dom';
import AppHeader from './header/Header';
const { Content } = Layout;


export const PrivetLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return(
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ margin: '16px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}