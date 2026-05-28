import React, { useState } from 'react'
import styled from 'styled-components'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { toggle, update, remove } from '../../no3_store/slices/todoSlice'

const TodoListChild = ({ item }) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(item.subject)

    const handleToggle = () => {
        dispatch(toggle(item.id))
    }

    const handleUpdate = () => {
        dispatch(update({ id: item.id, value }))
        setEditing(false)
    }

    const handleDelete = () => {
        dispatch(remove(item.id))
    }

    return (
        <Item>
            <CheckBox onClick={handleToggle}>
                {item.checked
                    ? <MdCheckBox size={22} color="#6366f1" />
                    : <MdCheckBoxOutlineBlank size={22} color="#cbd5e1" />
                }
            </CheckBox>
            <Content>
                {editing ?
                    <EditInput
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={handleUpdate}
                        onKeyDown={(e) => { if (e.key === "Enter") handleUpdate() }}
                        autoFocus
                    />
                    :
                    <Checked
                        $checked={item.checked}
                        onDoubleClick={() => setEditing(true)}
                    >
                        {item.subject}
                    </Checked>
                }
            </Content>
            <DeleteBtn onClick={handleDelete}>
                <MdRemoveCircleOutline size={20} />
            </DeleteBtn>
        </Item>
    )
}

export default TodoListChild


const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 20px;
    border-bottom: 1px solid #f8fafc;
    transition: background 0.15s;
    &:hover { background: #f8fafc; }
    &:last-child { border-bottom: none; }
`

const CheckBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 12px;
    flex-shrink: 0;
`

const Content = styled.div`
    flex: 1;
`

const Checked = styled.div`
    font-size: 15px;
    color: ${({ $checked }) => $checked ? "#94a3b8" : "#1e293b"};
    text-decoration: ${({ $checked }) => $checked ? "line-through" : "none"};
    cursor: text;
    transition: 0.2s;
`

const EditInput = styled.input`
    width: 100%;
    padding: 6px 10px;
    border: 1.5px solid #6366f1;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
`

const DeleteBtn = styled.div`
    cursor: pointer;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    margin-left: 8px;
    transition: 0.2s;
    &:hover { color: #ef4444; }
`