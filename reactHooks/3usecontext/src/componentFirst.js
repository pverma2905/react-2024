import React, { Component, useContext } from 'react'
import ComponentSecond from './componentSecond'
import { contextCall } from './CreateContext'

export default function ComponentFirst() {
   const context = useContext(contextCall);
  return (
    <div>
        ComponentFirst
        {
            context.map((data)=>(
                <>
                <div key={data.name}>{data.name}</div>
                <div key={data.name}>{data.phone}</div>
                <div key={data.name}>{data.class}</div> 
                </>
               
            ))
        }
        {/* <ComponentSecond/> */}
    </div>
  )
}
