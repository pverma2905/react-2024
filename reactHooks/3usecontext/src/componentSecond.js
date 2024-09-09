import React, { useContext } from 'react'
import ComponentThird from './componentThird'
import { contextCall } from './CreateContext';

export default function ComponentSecond() {
    const context = useContext(contextCall);
  return (
    <div>
        ComponentSecond
        {
            context.map((data)=>(
                <>
                <div key={data.name}>{data.name}</div>
                <div key={data.name}>{data.phone}</div>
                <div key={data.name}>{data.class}</div> 
                </>
               
            ))
        }
        <ComponentThird/>
    </div>
  )
}
