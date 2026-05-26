import React from 'react'

const initialEmps = [
    { id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600 },
    { id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600 },
    { id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600 },
    { id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600 },
]

const initialEmp = {
    id: '', name: '', email: '', job: '', pay: ''
}

const inputStyle = {
    width: '100%', padding: '10px 12px',
    border: '1px solid #e2e8f0', borderRadius: '8px',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
}
const labelStyle = {
    display: 'block', fontSize: '13px',
    color: '#64748b', marginBottom: '4px', fontWeight: '500'
}

// 분산된 emps, emp 하나로 합침.
const initialState = {
    empTable: initialEmps,
    emp: initialEmp
}

const EmployeeRegister = ({ dispatch, emp }) => {

    const handleChange = (e) => {
        dispatch({ type: 'change', payload: e.target })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!emp.name || !emp.email || !emp.job || !emp.pay) {
            alert("모든 항목을 입력해주세요.")
            return;
        }
        const newId = String(Date.now())
        dispatch({ type: 'register', payload: { newId, emp } })

        dispatch({ type: 'reset_emp' })
    }

    return (
        <form onSubmit={handleSubmit} style={{
            background: 'white', padding: '24px', borderRadius: '12px',
            border: '1px solid #e2e8f0', maxWidth: '400px', marginTop: '16px'
        }}>
            <h3 style={{ margin: '0 0 20px', fontSize: '16px', color: '#1e293b' }}>직원 등록</h3>
            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>이름</label>
                <input style={inputStyle} type="text" name="name"
                    value={emp.name} onChange={handleChange} placeholder='이름' />
            </div>
            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>이메일</label>
                <input style={inputStyle} type="text" name="email"
                    value={emp.email} onChange={handleChange} placeholder='이메일' />
            </div>
            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>직업</label>
                <input style={inputStyle} type="text" name="job"
                    value={emp.job} onChange={handleChange} placeholder='직업' />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>급여</label>
                <input style={inputStyle} type="text" name="pay"
                    value={emp.pay} onChange={handleChange} placeholder='급여' />
            </div>
            <button style={{
                width: '100%', padding: '10px', background: '#3b82f6',
                color: 'white', border: 'none', borderRadius: '8px',
                fontWeight: '500', cursor: 'pointer', fontSize: '14px'
            }}>등록</button>
        </form>
    )
}

export default EmployeeRegister