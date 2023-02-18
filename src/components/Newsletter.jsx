import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title=styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc=styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer=styled.div`
    border: 1px solid black;
    height: 40px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 1px solid lightgray;
`

const Input=styled.input`
    border: none;
    flex:9;
    padding-left:20px;
    outline: none;
`

const Button=styled.button`
    flex:1;
    border: none;
    background-color: teal;
    color: white;
`



const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter