import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function Child(props, ref) {
    
    const name = useRef('');
    const callEvent = ()=>{
        name.current.style.color='red'
    }

    const focus = ()=>{
        name.current.focus()
    }
    useImperativeHandle(ref,()=>{
        return{
            callEvent,
            focus,
            alert(){
                alert("use imperitve is working successfully")
            }       
        }
    })
  return (
    <div>
        <input type="text" ref={name} />
        <button onClick={callEvent}>Call Event</button>
    </div>
  )
}

export default forwardRef(Child)
