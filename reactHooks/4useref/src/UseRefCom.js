import React, { useEffect, useRef, useState } from 'react'

export default function UseRefCom() {
    const [name, setName] = useState('');
    const inputRef = useRef('');
    useEffect(()=>{
        console.log("rerendering.........",name)
    })

    const onChangeEvent=()=>{
        // inputRef.current.value="seema"
        inputRef.current.style.color="red"
    }

    const domEvent = ()=>{
        inputRef.current.focus();
    }
  return (
    <div>
        <input 
         value={name}
         onChange={(e)=>setName(e.target.value)}
        />
        <br/>
        <input 
         ref={inputRef}
         onChange={onChangeEvent}
        />
        <br/>
        <button onClick={domEvent}>Dom Element Change</button>
    </div>
  )
}
