import React, {useState} from 'react'

const initialState = {
    username: "", password: ""
}

const LoginForm = ({ users, setLoginMode }) => {
    const [user, setUser] = useState(initialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev =>(
            {...prev, [name]:value}
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginUser = users.filter(item=>(
            item.username === user.username
            && item.password === user.password
        ))[0]
        if(loginUser){
            alert("성공")
            setLoginMode(prev=>(
                {...prev, isLogin: true, username: loginUser.username}
            ))
        }else{
            alert("입력하신 정보가 다릅니다.")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>로그인</h2>
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
                    <button>로그인</button>
                </div>

            </form>
        </>
    )
}

export default LoginForm
