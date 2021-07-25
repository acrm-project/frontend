import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { onOpen } from 'lib/create-application-modal-window/model'
import { useSelectedLinks } from 'lib/selected-menu-links-hook'
import { $dark_gray } from 'app/global-styles/colors'
import {
  AppstoreOutlined,
  AuditOutlined,
  MailOutlined,
} from '@ant-design/icons'

export const SideMenu = (): JSX.Element => {
  const { selectedLink, mappedLinks } = useSelectedLinks()

  return (
    <Menu
      style={{
        maxWidth: '300px',
        height: '94vh',
        background: `${$dark_gray}`,
      }}
      selectedKeys={[selectedLink.key]}
      mode='inline'
      theme='dark'
      inlineCollapsed={false}
    >
      <Menu.Item key='1' icon={<AuditOutlined />} onClick={() => onOpen()}>
        Создать заявку
      </Menu.Item>

      {mappedLinks()}

      <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
        <Menu.Item key='5'>Option 5</Menu.Item>
        <Menu.Item key='6'>Option 6</Menu.Item>
        <Menu.Item key='7'>Option 7</Menu.Item>
        <Menu.Item key='8'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
        <Menu.Item key='9'>Option 9</Menu.Item>
        <Menu.Item key='10'>Option 10</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  )
}
