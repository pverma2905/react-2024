import React, { forwardRef } from 'react'

function Input(props,ref) {
  return (
    <input type={props.type} placeholder={props.placeholder} ref={ref}/>
  )
}

export default forwardRef(Input)
