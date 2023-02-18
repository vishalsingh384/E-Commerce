import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height: 70vh;
    width: 100%;
    margin: 3px;
    position: relative;
`;

const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;

const Title=styled.div`
    color: white;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
`;

const Button=styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600;
    cursor: pointer;
    border-radius: 2px;
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem