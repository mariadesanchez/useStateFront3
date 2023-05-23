import { useState } from 'react'
import cardStyle from './Card.module.css'

const Card = ({element, setCart, cart}) => {

  const [counter, setCounter] = useState(0)

  const {id, tipo} = element


  return (
    <div className={cardStyle.card} >

        <button style={{backgroundColor:'black',color:'white',width:'350px',height:'80px',fontSize:'32px'}}onClick={() => setCart([...cart, element])}>Agregar{tipo}</button>

    
    </div>
  )
}

export default Card