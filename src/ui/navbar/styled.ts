import styled from 'styled-components'
import { $dark_blue, $light_blue } from '../../app/global-styles/colors'

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 6vh;
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  background: #fff;
`

export const AuthenticationSection = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const AuthBordered = styled.div`
  color: #fff;
  font-size: 18px;
  display: flex;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 1rem;
  align-items: center;
  padding: 5px 20px;
  background: ${$light_blue};

  &:nth-child(1n) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  &:hover {
    background: ${$dark_blue};
  }
`

export const User = styled.h3`
  color: #000;
`

export const BackArrow = styled.div`
  color: #000;
  font-size: 25px;

  &:nth-child(1n):hover {
    color: ${$light_blue};
  }
`
