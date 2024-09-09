import React, { createContext, useState } from 'react'

export const contextCall = createContext();

export function ContextProvider(props) {
    const [first, setFirst] =useState([
        {
            name:"test1",
            phone:"9876543212",
            class:"first"
        },
        {
            name:"test2",
            phone:"9876543212",
            class:"second"
        },
        {
            name:"test2",
            phone:"9876543212",
            class:"third"
        }
    ])
  return (
    <contextCall.Provider value={first}>
        {props.children}
    </contextCall.Provider>
  )
}
