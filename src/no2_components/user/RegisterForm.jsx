import React, { useState } from 'react'

const initialState = {
    id: "", username: "", password: "", confirmPassword: ""
}

const RegisterForm = ({ setUsers }) => {
    const [user, setUser] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => (
            { ...prev, [name]: value }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert("비밀번호가 일치 하지 않습니다.")
            return;
        }

        setUsers(prev => (
            [...prev,
            {
                id: user.id,
                username: user.username,
                password: user.password,
            }
            ]
        ))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>회원등록</h2>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder='사용자 이름'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder='비밀번호'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder='비밀번호 확인'
                    />
                </div>
                <div>
                    <button>등록</button>
                </div>

            </form>
        </div>
    )
}

export default RegisterForm
