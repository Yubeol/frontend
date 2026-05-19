import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'
import SiderBar from './no2_components/layout/SiderBar'
import HeaderBar from './no2_components/layout/HeaderBar'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <div style={{ display: 'flex' }}>
          <SiderBar />
          <main style={{ flex: 1 }}>
            <Routes>
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