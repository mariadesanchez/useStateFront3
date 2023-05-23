import React from 'react'
import imgpizza from '../assets/pizza_de_mozzarella.jpg'
import Card from './Card/Card'
import { styled } from 'styled-components'


const Home = ({setCart, cart}) => {

    let elementos = [
        { id: 1, tipo: 'punto1' },
        { id: 2, tipo: 'punto2' },
        { id: 3, tipo: 'punto3' },
        { id: 4, tipo: 'articulo x' },
       
    ]

  return (
    <Container>


        <h1 >Lista de elementos</h1>
        {elementos.map(elemento => <Card cart={cart} setCart={setCart} key={elemento.id} element={elemento}/>)}
        <div style={{padding: '2em',  width: '800px', border: '3px solid beige',borderRadius:'10px',backgroundColor:'grey', marginBottom: '10px', boxShadow: '3px 5px 8px #000',color:'white'}} >

        {console.log(cart)}
        <ul style={{listStyleType: 'none'}}>
        {cart.map(item => <li style={{fontSize:'50px'}} key={item.id}>{item.tipo}</li>)}
        </ul>
    </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  margin-top: 40px;
  background-color: violet;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`