import React, { useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'

const initialEmps = [
  { id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600 },
  { id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600 },
  { id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600 },
  { id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600 },
]

const initialEmp = {
  id: '', name: '', email: '', job: '', pay: ''
}

const initialState = {
  empTable: initialEmps,
  emp: initialEmp,
  mode: '',
  selectedId: ""
}



const EmployeePage = () => {

  const [state, setState] = useState(initialState);

  return (
    <div>
      <EmployeeList state={state} setState={setState}/>

    </div>
  )
}

export default EmployeePage
