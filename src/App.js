import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const handleClick = (event) => {
    if (event.target.value === 'AC') {
      setValue('')

    }
    else {

      setValue(value + event.target.value)
    }
  }

  const equate = () => {
    const evaluation = eval(value)
    setValue(evaluation)
  }

  const setInputValue = (e) => {
    setValue((e.target.value).replace(/\D/g, ''))
  }
  return (
    <div className="App">
      <div className='baseCalci'>
        <div className='mainCal'>
          <input className='display' type='text' value={value} onChange={setInputValue} />
          <div className='keyboard'>
            <div className='row1'>
              <button className='key merged' value={"AC"} onClick={handleClick} >AC</button>
              <button className='key' value={"%"} onClick={handleClick}>%</button>
              <button className='key last' onClick={equate}>=</button>

            </div>
            <div className='row2'>

              <button className='key' value={7} onClick={handleClick}>7</button>
              <button className='key' value={8} onClick={handleClick}>8</button>
              <button className='key' value={9} onClick={handleClick}>9</button>
              <button className='key last' value={'*'} onClick={handleClick}>x</button>
            </div>
            <div className='row3'>

              <button className='key' value={4} onClick={handleClick}>4</button>
              <button className='key' value={5} onClick={handleClick}>5</button>
              <button className='key' value={6} onClick={handleClick}>6</button>
              <button className='key last' value={'-'} onClick={handleClick}>-</button>
            </div>
            <div className='row4'>

              <button className='key' value={1} onClick={handleClick}>1</button>
              <button className='key' value={2} onClick={handleClick}>2</button>
              <button className='key' value={3} onClick={handleClick}>3</button>
              <button className='key last' value={'+'} onClick={handleClick}>+</button>
            </div>
            <div className='row5'>

              <button className='key merged' value={0} onClick={handleClick} >0</button>
              <button className='key' value={'.'} onClick={handleClick}>.</button>
              <button className='key last' value={'/'} onClick={handleClick}>÷</button>

            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
