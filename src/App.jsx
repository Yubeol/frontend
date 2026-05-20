import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'
import SiderBar from './no2_components/layout/SiderBar'
import HeaderBar from './no2_components/layout/HeaderBar'
import LoginPage from './no1_pages/user/LoginPage'
import { useState } from 'react'
import RegisterPage from './no1_pages/user/RegisterPage'

const initialState = [
  { id: 1, username: "john", password: "1111" },
  { id: 2, username: "peter", password: "1111" },
  { id: 3, username: "susan", password: "1111" },
  { id: 4, username: "sue", password: "1111" },
]
const initialMode = {
  isLogin: false,
  username: ""
}


function App() {
  const [users, setUsers] = useState(initialState);
  const [loginMode, setLoginMode] = useState(initialMode);

  return (
    <>
      <BrowserRouter>
      {console.log(users)}
        {console.log(loginMode.username)}
        <HeaderBar loginMode={loginMode} setLoginMode={setLoginMode} />
        <div style={{ display: 'flex' }}>
          <SiderBar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/login" element={
                <LoginPage users={users}
                  setLoginMode={setLoginMode} />
              } />
              <Route path="/register" element={
                <RegisterPage
                  setUsers={setUsers} />
              } />
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/employee" element={<EmployeePage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App