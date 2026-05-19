import React, { useState } from 'react'

const initialState = {
   id:'',name:'', email:'', job:'', pay:null
}

const Register = ({ setInfos }) => {
    const [info, setInfo] = useState(initialState)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInfo(prev => (
        {...prev,  [name]: value} 
    ))
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfos(prev => (
        [...prev, info]
    ))
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <input type="text" name="name" value={info.name} onChange={handleChange} placeholder='이름 입력' />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" name="email" value={info.email} onChange={handleChange} placeholder='email@example.com' />
      </div>
      <div>
        <label>직업</label>
        <input type="text" name="job" value={info.job} onChange={handleChange} placeholder='직업 입력' />
      </div>
      <div>
        <label>급여</label>
        <input type="number" name="pay" value={info.pay} onChange={handleChange} placeholder='급여 입력' />
      </div>
      <button type="submit">등록</button>
    </form>
  )
}

export default Register