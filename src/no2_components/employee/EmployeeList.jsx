import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../no3_store/slices/employeeSlice";

const EmployeeList = () => {
  const { empTable, selectedId } = useSelector(state => state.emp);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
      {empTable?.map(item => (
        <button key={item.id}
          onClick={() => dispatch(select(item.id))}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            background: selectedId === item.id ? '#3b82f6' : 'white',
            color: selectedId === item.id ? 'white' : '#334155',
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