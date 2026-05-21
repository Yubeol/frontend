import React, { useEffect, useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'

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
  const { empTable, emp, selectedId, mode } = state;

  useEffect(() => {
    selectedId &&
      setState(prev => ({
        ...prev,
        emp: empTable.find(item => item.id === selectedId)
      }))
  }, [selectedId, empTable])

  const handleDelete = () => {
    if(!selectedId){
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    setState(prev => ({
      ...prev,
      empTable: prev.empTable.filter(item => item.id !== selectedId),
      emp: initialEmp,
      selectedId: ""
    }))
  }

  return (
    <div style={{ padding: '24px', maxWidth: '900px' }}>
      <EmployeeList state={state} setState={setState} />
      <EmployeeTable state={state} />

      <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
        <button
          onClick={() => setState(prev => ({ ...prev, mode: "register" }))}
          style={{
            padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: mode === 'register' ? '#1d4ed8' : '#3b82f6',
            color: 'white', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
          }}>
          등록
        </button>
        <button
          onClick={() => setState(prev => ({ ...prev, mode: "update" }))}
          style={{
            padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: mode === 'update' ? '#15803d' : '#22c55e',
            color: 'white', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
          }}>
          수정
        </button>
        <button
          onClick={() => setState(prev => ({ ...prev, mode: "delete" }))}
          style={{
            padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: mode === 'delete' ? '#b91c1c' : '#ef4444',
            color: 'white', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
          }}>
          삭제
        </button>
      </div>

      {mode === "register" && <EmployeeRegister setState={setState} />}
      {mode === "update" && <EmployeeUpdate emp={emp} setState={setState} />}
      {mode === "delete" && (
        <button onClick={handleDelete} style={{
          padding: '10px 24px', borderRadius: '8px', border: '1px solid #fca5a5',
          background: '#fef2f2', color: '#b91c1c',
          fontWeight: '500', cursor: 'pointer', fontSize: '14px', marginTop: '8px'
        }}>
          위 데이터를 삭제하시겠습니까?
        </button>
      )}
    </div>
  )
}



export default EmployeePage
