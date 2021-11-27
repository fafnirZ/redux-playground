import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux';


interface Props {
  
}

function Sidebar({}: Props): ReactElement {

  // dispatcher hook
  // newer methods of interacting with redux
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: 'increment'
    })
  }

  const handleDecrement = () => {
    dispatch({
      type: 'decrement'
    })
  }

  return (
    <div style={{
      width: '20vw',
      height: '100vh',
      background: '#ffff',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <button onClick={handleIncrement}>increment</button> 
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  )
}

export default Sidebar
