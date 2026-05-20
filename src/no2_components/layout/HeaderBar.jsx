import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  background-color: #1e1e2f;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #7c6af7;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const AuthButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:first-child {
    background: transparent;
    color: white;
    border: 1px solid #7c6af7;
    &:hover { background: #7c6af7; }
  }

  &:last-child {
    background: #7c6af7;
    color: white;
    &:hover { background: #6a5be0; }
  }
`

const HeaderBar = ({ loginMode, setLoginMode }) => {
  const navigate = useNavigate();

  return (
    <Header>

      <Logo>Logo</Logo>
      <ButtonGroup>
        {loginMode.isLogin ?
          <div>
            <button>{loginMode.username}님</button>
            <button>로그아웃</button>
          </div>
          :
          <div>
            <AuthButton onClick={() => navigate("/login")}>
              로그인
            </AuthButton>
            <AuthButton onClick={() => navigate("/register")}>
              회원가입
              </AuthButton>

          </div>
        }

      </ButtonGroup>
    </Header>
  )
}

export default HeaderBar