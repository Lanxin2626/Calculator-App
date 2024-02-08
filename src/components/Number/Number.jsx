import React from 'react'

const Number = (props) => {
  if(props.lastOperation !=='='){
    
    props.setIsNewOperation(false);
  }
  else
  {
    props.setIsNewOperation(true);
  }

  return (
      <div className='Number btn' onClick={() => props.handleInputChange(props.value)}>
         {props.value}
      </div>
  )
}

export default Number