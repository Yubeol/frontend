import React, { useState } from 'react'

const Register = ({ addInfo }) => {
  const [form, setForm] = useState({ name: '', email: '', job: '', pay: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addInfo(form)
    setForm({ name: '', email: '', job: '', pay: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='이름 입력' />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='이메일 입력' />
      </div>
      <div>
        <label>직업</label>
        <input type="text" name="job" value={form.job} onChange={handleChange} placeholder='직업 입력' />
      </div>
      <div>
        <label>급여</label>
        <input type="number" name="pay" value={form.pay} onChange={handleChange} placeholder='급여 입력' />
      </div>
      <button type="submit">생성</button>
    </form>
  )
}

export default Register