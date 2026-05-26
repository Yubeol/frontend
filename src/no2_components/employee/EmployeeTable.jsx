import React, { useContext } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeTable = () => {

  const { state } = useContext(EmployeeContext)
  const { emp } = state

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
      <thead>
        <tr style={{ background: '#f1f5f9' }}>
          {emp && Object.keys(emp).map(key => (
            <th key={key} style={{ padding: '10px 14px', textAlign: 'left', fontSize: '13px', color: '#64748b', fontWeight: '600', borderBottom: '1px solid #e2e8f0' }}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {emp && Object.values(emp).map((value, i) => (
            <td key={i} style={{ padding: '10px 14px', borderBottom: '1px solid #e2e8f0', fontSize: '14px', color: '#1e293b' }}>
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default EmployeeTable
