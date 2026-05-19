import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/todo" element={<TodoPage/>}/>
          <Route path="/employee" element={<EmployeePage/>}/>
        </Routes> 
      </BrowserRouter>
      
    </>
  )
}
export default App
