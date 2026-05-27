import React from 'react'
import styled from 'styled-components'

const TodoTemplate = ({ children }) => {
     return (
        <Wrapper>             
            <Title>일정관리</Title>
            <Box>               
                {children}
            </Box>
        </Wrapper>
    )
}

export default TodoTemplate


const Wrapper = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 0 16px;
`

const Title = styled.h2`
    font-size: 26px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 20px;
`

const Box = styled.div`
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    overflow: hidden;
`
