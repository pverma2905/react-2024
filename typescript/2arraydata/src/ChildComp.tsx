import React from 'react'


type ChildProps={
    arrayData:{
        AccountId:string,
        AccountName:string,
        employeeInfo:{
            empName:string,
            empAge:number,
            salary:number,
            department:string
          }[]
      }[]
}


export default function ChildComp({arrayData}:ChildProps) {
    
  return (
    <div>ChildComp
     {
        arrayData[0].employeeInfo.map((item:any)=>
            <div>{item.empName}</div>
        )
     }
    </div>
  )
}
