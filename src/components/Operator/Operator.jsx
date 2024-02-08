import React from 'react'

const Operator = (props) => {
  const operation = () => {
    let current = parseFloat(props.input) || 0;
    let result;
    if(props.isNewOperation){
      result = 0;
      result=current; 
    }
    else{
      result = props.preNumber;
    } 


    const performOperation = (operator) =>{
      switch (operator) {
        case '+':
          return result + current;

        case '-':
          if (props.lastOperation === '') {
            return current;
          } else {
            return result - current;
          }
        case '*':
          if (props.lastOperation === '') {
            return current;
          } else {
            if(current === 0 || props.input === ''){
              return result;
          }
          else{
            return result * current;
          }
        }

        case '/':
          if (current !== 0) {
            if(result!==0)
            {
              return parseFloat(result/current);
            }
            else{
              return result=current/1;
            }
          } else {
            console.log("Cannot divide by zero");
            alert("Cannot divide by zero");
            return result;
          }
        case '=':
          props.setLastOperation('');
        
          default:
          return result;
      }

    }

    if (props.operator !== '=') {
      if(props.lastOperation!=='')
      {
        result=performOperation(props.lastOperation);
      }
      else{
        result = performOperation(props.operator);
        props.setScreenDisplay('');
      }         
       
    } else {
      result = performOperation(props.lastOperation); 
    }

    props.setLastOperation(props.operator);
    props.setInput('');
    props.setPreNumber(result);
    props.setScreenDisplay(result);
    
  };

  return (
    <div className='Operator btn' onClick={operation}>
      {props.operator}
    </div>
  )
}

export default Operator;

