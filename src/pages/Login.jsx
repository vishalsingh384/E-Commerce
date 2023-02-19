import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(
        rgb(242, 198, 253,0.3),
        rgb(80,170,152,0.2)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    outline: none;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 5px;
`
const Help=styled.div`
    margin: 5px 0px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
`

const Link = styled.div`
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
    letter-spacing: 1px;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Help>CAN'T REMEMBER YOUR PASSWORD?</Help>
                    <Link>FORGOT PASSWORD</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login