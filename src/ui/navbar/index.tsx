import { FC } from 'react'
import {
  AuthBordered,
  AuthenticationSection,
  StyledNavbar,
  User,
} from './styled'
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons'

export const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <AuthenticationSection>
        <User>ID: 1222032</User>
        <AuthBordered>
          <UserOutlined />
          <ArrowRightOutlined style={{ marginLeft: '5px' }} />
        </AuthBordered>
      </AuthenticationSection>
    </StyledNavbar>
  )
}
