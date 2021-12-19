import React, { ReactElement, useState } from 'react'
import { useSelector} from 'react-redux';


function Display(){

  // selector hook
  // no need to use 
  const count = useSelector(state => state.counter.value);

  return (
    <div style={{
      marginLeft: '300px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
    }}>
      {count}
    </div>
  )
}

export default Display;
