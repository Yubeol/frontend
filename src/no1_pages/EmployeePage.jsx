import React, { useContext, useEffect } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import { EmployeeContext } from '../no0_context/EmployeeContext'



const EmployeePage = () => {
  const { state, dispatch } = useContext(EmployeeContext)
  const { selectedId, empTable, mode } = state

  useEffect(() => {
    selectedId &&
      dispatch({
        type: "set_emp",
        payload: empTable.filter(item => item.id === selectedId)[0]
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
      <EmployeeList />
      <EmployeeTable />

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

      {mode === "register" && <EmployeeRegister />}
      {mode === "update" && <EmployeeUpdate />}
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
