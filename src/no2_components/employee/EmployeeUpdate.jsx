import React from 'react'

const inputStyle = {
    width: '100%', padding: '10px 12px',
    border: '1px solid #e2e8f0', borderRadius: '8px',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
}
const labelStyle = {
    display: 'block', fontSize: '13px',
    color: '#64748b', marginBottom: '4px', fontWeight: '500'
}

const EmployeeUpdate = ({ emp, dispatch }) => {

    const handleChange = (e) => {
        dispatch({ type: 'change', payload: e.target })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emp.name || !emp.email || !emp.job || !emp.pay) {
            alert("모든 항목을 입력해주세요.")
            return
        }
        dispatch({ type: "update", payload: emp })
    }

    return (
        <form onSubmit={handleSubmit} style={{
            background: 'white', padding: '24px', borderRadius: '12px',
            border: '1px solid #e2e8f0', maxWidth: '400px', marginTop: '16px'
        }}>
            <h3 style={{ margin: '0 0 20px', fontSize: '16px', color: '#1e293b' }}>직원 수정</h3>
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
                width: '100%', padding: '10px', background: '#22c55e',
                color: 'white', border: 'none', borderRadius: '8px',
                fontWeight: '500', cursor: 'pointer', fontSize: '14px'
            }}>수정 완료</button>
        </form>
    )
}

export default EmployeeUpdate