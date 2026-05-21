import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const initialState = {
    username: "", password: ""
}

const LoginForm = ({ users, setLoginMode }) => {
    const [user, setUser] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.username || !user.password) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
    }

        const loginUser = users.filter(item => (
            item.username === user.username
            && item.password === user.password
        ))[0]
        if (loginUser) {
            alert("성공")
            setLoginMode(prev => (
                { ...prev, isLogin: true, username: loginUser.username }
            ))
            navigate("/")
        } else {
            alert("입력하신 정보가 다릅니다.")
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Title>로그인</Title>
            <Card>
                <Input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder='사용자 이름'
                />
                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder='비밀번호'
                />
                <LoginButton>로그인</LoginButton>
                <RegisterButton type="button" onClick={() => navigate("/register")}>
                    회원가입을 하셨나요? 회원가입
                </RegisterButton>
            </Card>
        </Form>
    )
}

export default LoginForm


const Form = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f1f5f9;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 32px;
    color: #1e293b;
    font-size: 28px;
`

const Card = styled.div`
    width: 400px;
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    padding: 14px 16px;
    margin-bottom: 16px;
    border: 1px solid #dbe4ee;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    transition: 0.2s;
    &:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }
`

const BaseButton = styled.button`
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
`

const LoginButton = styled(BaseButton)`
    background: #3b82f6;
    color: white;
    margin-bottom: 8px;
    &:hover {
        background: #2563eb;
    }
`

const RegisterButton = styled(BaseButton)`
    background: transparent;
    color: #3b82f6;
    span {
        color: red;
        text-decoration: underline;
    }
`