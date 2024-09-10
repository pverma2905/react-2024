import React from 'react'

type Childprops = {
    objData: {
        name: string,
        desination: string,
        age: number
    }
}

export default function Child({ objData }: Childprops) {
    return (
        <div>
            Child Component
            <h1>{objData.name}</h1>
        </div>
    )
}
