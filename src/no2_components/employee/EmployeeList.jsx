import React, { useContext } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeList = () => {

  const { state, dispatch } = useContext(EmployeeContext);
  const { empTable, selectedId } = state;

  const handleClick = (id) => {
    dispatch({ type: "select", payload: id })
  }

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
      {empTable?.map(item => (
        <button key={item.id}
          onClick={() => handleClick(item.id)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            background: state.selectedId === item.id ? '#3b82f6' : 'white',
            color: state.selectedId === item.id ? 'white' : '#334155',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default EmployeeList
