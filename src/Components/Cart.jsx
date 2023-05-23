import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
   
        <ul >
        {cart.map(item => <li style={{fontSize:'50px'}} key={item.id}>{item.tipo}</li>)}
        </ul>
    </div>
  )
}

export default Cart