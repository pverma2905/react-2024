import React, { useRef } from 'react'
import Child from './Child'

export default function UseImperitive() {
    const inputRef = useRef('');
    const parentEvent = ()=>{
        inputRef.current.callEvent();
        inputRef.current.focus();
        inputRef.current.alert();
    }
  return (
    <div>
        UseImperitive
        <Child ref={inputRef}/>
        <button onClick={parentEvent}>Parent Event</button>
    </div>
  )
}
