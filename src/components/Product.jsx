import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info=styled.div`
    opacity: 0;
    top:0;
    left:0;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    transition: all 0.5s ease;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    cursor: pointer;
`;

const Container=styled.div`
    flex:1;
    min-width: 280px;
    margin:5px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdf7ff;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image=styled.img`
    height: 75%;
    z-index: 2;
`

const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }

`


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
            <Icon>
            <SearchOutlined/>
            </Icon>
            <Icon>
            <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product