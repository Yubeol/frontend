import React from 'react'
import TodoListChild from './TodoListChild'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const TodoList = () => {
    const { todoList } = useSelector(state => state.todo)

    return (
        <div>
            {todoList?.map(item => (
                <TodoListChild
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default TodoList