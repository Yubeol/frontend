import React, { useState } from 'react'


const initialEmp = {
    id: '', name: '', email: '', job: '', pay: ''
}

const EmployeeRegister = ({ setState }) => {
    const [emp, setEmp] = useState(initialEmp);
    const handleChange = (e) => {
        const { name, value } = e.target
        setEmp(prev => (
            { ...prev, [name]: value }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emp && 
        setState(prev => (
            {
                ...prev,
                empTable: [
                    ...prev.empTable,
                    {...emp, id: Date.now()}
                ]
            }
        ))
        setState(prev=>({
            ...prev,
            selectedId: prev.empTable[prev.empTable.length-1].id
        }))
        setEmp(initialEmp)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름</label>
                    <input type="text"
                        name="name"
                        value={emp.name}
                        onChange={handleChange}
                        placeholder='이름'
                    />
                </div>
                <div>
                    <label>이메일</label>
                    <input type="text"
                        name="email"
                        value={emp.email}
                        onChange={handleChange}
                        placeholder='이메일'
                    />
                </div>
                <div>
                    <label>직업</label>
                    <input type="text"
                        name="job"
                        value={emp.job}
                        onChange={handleChange}
                        placeholder='직업'
                    />
                </div>
                <div>
                    <label>급여</label>
                    <input type="text"
                        name="pay"
                        value={emp.pay}
                        onChange={handleChange}
                        placeholder='금여'
                    />
                </div>
                <button>등록</button>
            </form>
        </>
    )
}

export default EmployeeRegister
