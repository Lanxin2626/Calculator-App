import React from 'react'

const AC = (props) => {
  const reset = () =>{
    props.setScreenDisplay('0');
    props.resetInput('');
    props.resetPreNumber(0);
    props.setLastOperation('');
    props.setIsNewOperation(true)
  }

  return (
    <div className='AC btn' onClick={reset}>
      {props.AC}
    </div>
  )
}

export default AC
