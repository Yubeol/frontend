import React, { useEffect, useReducer } from 'react'
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

const reducer = (state, action) => {
  switch (action.type) {
    case "select":
      return {
        ...state,
        selectedId: action.payload
      }
    case "set_emp":
      return {
        ...state,
        emp: action.payload
      }
    case "register":
      return {
        ...state,
        empTable: [
          ...state.empTable,
          {
            ...action.payload.emp,
            id: action.payload.newId
          }
        ]
      }
    case "change":
      const { name, value } = action.payload;
      return {
        ...state,
        emp: { ...state.emp, [name]: value }
      }
    case "update":
      return {
        ...state,
        empTable: state.empTable.map(item =>
          item.id === state.selectedId ?
            action.payload : item
        )
      }
    case "mode":
      return { ...state, mode: action.payload }
    case "reset_emp":
      return { ...state, emp: initialEmp }
    case "delete":
      return {
        ...state,
        empTable: state.empTable.filter(item =>
          item.id !== state.selectedId
        )
      }
    default:
      return state;
  }
}

const EmployeePage = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const { empTable, emp, selectedId, mode } = state;

  useEffect(() => {
    selectedId &&
      dispatch({
        type: "set_emp",
        payload: empTable.find(item => item.id === selectedId)
      })
  }, [selectedId, empTable])

  const handleDelete = () => {
    if (!selectedId) {
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    dispatch({ type: "delete" })
  }

  return (
    <div style={{ padding: '24px', maxWidth: '900px' }}>
      <EmployeeList state={state} dispatch={dispatch} />
      <EmployeeTable state={state} />

      <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
        <button
          onClick={() => dispatch({ type: "mode", payload: "register" })}
          style={{
            padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: mode === 'register' ? '#1d4ed8' : '#3b82f6',
            color: 'white', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
          }}>
          등록
        </button>
        <button
          onClick={() => dispatch({ type: "mode", payload: "update" })}
          style={{
            padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: mode === 'update' ? '#15803d' : '#22c55e',
            color: 'white', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
          }}>
          수정
        </button>
        <button
          onClick={() => dispatch({ type: "mode", payload: "delete" })}
          style={{
            padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: mode === 'delete' ? '#b91c1c' : '#ef4444',
            color: 'white', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
          }}>
          삭제
        </button>
      </div>

      {mode === "register" && <EmployeeRegister dispatch={dispatch} emp={emp} />}
      {mode === "update" && <EmployeeUpdate emp={emp} dispatch={dispatch} />}
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
