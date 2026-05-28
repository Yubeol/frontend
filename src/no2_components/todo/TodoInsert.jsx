import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { change, insert } from '../../no3_store/slices/todoSlice'

const TodoInsert = () => {
    const { todoObj } = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(change({ name, value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(insert())
    }

    return (
        <Form onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                name="subject"
                value={todoObj.subject}
                onChange={handleChange}
                required
                placeholder='할 일을 입력하세요'
            />
            <AddButton>입력</AddButton>
        </Form>
    )
}

export default TodoInsert

const Form = styled.form`
    display: flex;
    gap: 8px;
    padding: 20px;
    border-bottom: 1px solid #f1f5f9;
`

const StyledInput = styled.input`
    flex: 1;
    padding: 12px 16px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    transition: 0.2s;
    &:focus {
        border-color: #6366f1;
        box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
    }
    &::placeholder { color: #cbd5e1; }
`

const AddButton = styled.button`
    padding: 12px 20px;
    background: #6366f1;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:hover { background: #4f46e5; }
`