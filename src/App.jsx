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
import EmployeeProvider from './no0_context/EmployeeContext'
import UserProvider from './no0_context/UserContext'
import styled from 'styled-components'

function App() {

  return (
      <BrowserRouter>
        <UserProvider>
          <Container>
            <HeaderBar />
            <BodyLayout>
              <SiderBar />
              <PageContainer>
                <Routes>
                  <Route path="/login" element={
                    <LoginPage />
                  } />
                  <Route path="/register" element={
                    <RegisterPage />
                  } />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/todo" element={<TodoPage />} />
                  <Route path="/employee" element={
                    <EmployeeProvider>
                      <EmployeePage />
                    </EmployeeProvider>
                  } />
                </Routes>
              </PageContainer>
            </BodyLayout>
          </Container>
        </UserProvider>
      </BrowserRouter>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const BodyLayout = styled.div`
  display: flex;
  flex: 1;
`

const PageContainer = styled.main`
  flex: 1;
  padding: 24px;
  background: #f1f5f9;
`