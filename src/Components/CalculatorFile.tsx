import { useState } from "react"


const CalculatorFile = () => {
   const[data, setData]= useState("")

    const getValue=(event:any)=>{
        console.log(event.target.value);
        setData(data.concat(event.target.value));
    }

    const calculate = ()=>{
        setData(eval(data).toString());
    }
    const clear =()=>{
        setData(data.slice(0,-1));
    }
    const allClear =()=>{
        setData(" ");
    }
  return (
    <>
    <h1>Calculator</h1>
    <div className='main-content'>
      <input placeholder='-' value={data} />
      <div >
        <button onClick={getValue} value="(">(</button>
        <button onClick={getValue} value=")">)</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={getValue} value="/">/</button>
      </div>
      <div>
        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>
      </div>
      <div>
        <button  onClick={getValue} value="4">4</button>
        <button  onClick={getValue} value="5">5</button>
        <button  onClick={getValue} value="6">6</button>
        <button  onClick={getValue} value="-">-</button>
      </div>
      <div>
        <button  onClick={getValue} value="1">1</button>
        <button  onClick={getValue} value="2">2</button>
        <button  onClick={getValue} value="3">3</button>
        <button  onClick={getValue} value="+">+</button>
      </div>
      <div>
        <button  onClick={getValue} value="0">0</button>
        <button  onClick={clear} >DEL</button>
        <button  onClick={calculate} >=</button>
        <button  onClick={allClear} >AC</button>
      </div>
    </div>
      
    </>
  )
}

export default CalculatorFile