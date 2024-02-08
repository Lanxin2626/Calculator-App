import { useState, useEffect } from 'react'
import './App.css'
import Number from './components/Number/Number'
import Screen from './components/Screen/Screen'
import Operator from './components/Operator/Operator'
import AC from './components/AC'

function App() {

  const [isNewOperation, setIsNewOperation]=useState(true);
  const [input,setInput]=useState('');
  const [preNumber,setPreNumber]=useState(0);
  const [screenDisplay, setScreenDisplay]=useState('');
  const [lastOperation,setLastOperation]=useState('');
  

  const handleInputChange = (value) => {
    let newInput = input.toString() + value; 

    if (input === '0' && (value !== '0' || value === '.')) {
      newInput = (value === '.') ? '0.' : value;
    } else {

      if (newInput.match(/^0{2,}/) && !newInput.includes('.')) {
        newInput = '0';
      }

      if (value === '.' && input.includes('.')) {
        return;
      }

    }
    setInput(newInput);
    setScreenDisplay(newInput);
  }

  useEffect(() => {
    
  }, [input,isNewOperation]);

  return (
    <>
      <div className='container'>
        <div className='calculator-wrapper'>
        <Screen display={screenDisplay}></Screen>
        
        <AC AC='AC'
        setScreenDisplay={setScreenDisplay}
        resetInput={setInput}
        resetPreNumber={setPreNumber}
        setLastOperation={setLastOperation}
        setIsNewOperation={setIsNewOperation}>AC</AC>
        
        <Operator operator='/'  
        input={input}
        preNumber={preNumber}
        setPreNumber={setPreNumber}
        setInput={setInput}
        setScreenDisplay={setScreenDisplay}
        lastOperation={lastOperation}
        setLastOperation={setLastOperation}
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}>/</Operator>

        <Number value={7} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation}
        isNewOperation={isNewOperation} 
        setIsNewOperation={setIsNewOperation}></Number>
        <Number value={8} handleInputChange={(e) => handleInputChange(e, input)}
        lastOperation={lastOperation}
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>
        <Number value={9} handleInputChange={(e) => handleInputChange(e, input)}
        lastOperation={lastOperation}
        isNewOperation={isNewOperation} 
        setIsNewOperation={setIsNewOperation}></Number>

        <Operator operator='*' 
        input={input}
        preNumber={preNumber}
        setPreNumber={setPreNumber}
        setInput={setInput}
        setScreenDisplay={setScreenDisplay}
        lastOperation={lastOperation}
        setLastOperation={setLastOperation}
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}>*</Operator>

        <Number value={4} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>

        <Number value={5} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>

        <Number value={6} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation}
        isNewOperation={isNewOperation} 
        setIsNewOperation={setIsNewOperation}></Number>

        <Operator operator='+'
          input={input}
          preNumber={preNumber}
          setPreNumber={setPreNumber}
          setInput={setInput}
          setScreenDisplay={setScreenDisplay}
          lastOperation={lastOperation}
          setLastOperation={setLastOperation}
          isNewOperation={isNewOperation}
          setIsNewOperation={setIsNewOperation}>+</Operator>

        <Number value={1} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>
        <Number value={2} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>
        <Number value={3} handleInputChange={(e) => handleInputChange(e, input)}
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation} ></Number>
        
        <Operator operator='-'        
          input={input}
          preNumber={preNumber}
          setPreNumber={setPreNumber}
          setInput={setInput}
          setScreenDisplay={setScreenDisplay}
          lastOperation={lastOperation}
          setLastOperation={setLastOperation}
          isNewOperation={isNewOperation}
          setIsNewOperation={setIsNewOperation}>-</Operator>

        <Number value={0} handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>

        <Number value='.' handleInputChange={(e) => handleInputChange(e, input)} 
        lastOperation={lastOperation} 
        isNewOperation={isNewOperation}
        setIsNewOperation={setIsNewOperation}></Number>
        
        <Operator operator='='
          input={input}
          preNumber={preNumber}
          setPreNumber={setPreNumber}
          setInput={setInput}
          setScreenDisplay={setScreenDisplay}
          lastOperation={lastOperation}
          setLastOperation={setLastOperation}
          isNewOperation={isNewOperation}
          setIsNewOperation={setIsNewOperation}>=</Operator>
        
        </div>
      </div>
    </>
  )
}

export default App
