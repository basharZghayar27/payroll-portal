import React from 'react'
import Sider from 'antd/es/layout/Sider'
import { Menu } from 'antd'
import { menuItems, menuKeys } from './menuItems'
import { useLocation } from 'react-router-dom';

type TSideMenu = {
  collapsed: boolean
}
export const SideMenu = ({collapsed}: TSideMenu) => {
  const location = useLocation(); 
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div>Logo</div>
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={[location.pathname.slice(1)]} activeKey={location.pathname.slice(1)} items={menuItems}/>
    </Sider> 
  )
}