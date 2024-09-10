import { useState } from "react";

import { CSVLink } from "react-csv";

const App = () => {

    const [data, setData] = useState([

        {

            name: "Vivek",

            mobno: "7054874357",

            email: "playerofcode@gmail.com"

        },

        {

            name: "Shshank",

            mobno: "7054874357",

            email: "playerofcode@gmail.com"

        }

    ]);

    const style = {

        width: '200px',

        textDecoration: 'none',

        background: '#15afd8',

        height: '40px',

        display: 'flex',

        justifyContent: 'center',

        alignItems: 'center',

        color: '#fff',

        borderRadius: '10px',

        margin: '10px'

    }

    return (

        <div className="App">

            <CSVLink data={data} style={style}>Download Excel File</CSVLink>

            <table border="1" cellSpacing={0} cellPadding={5}>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Mobile Number</th>

                        <th>Email</th>

                    </tr>

                </thead>

                <tbody>

                    {data.map((item, index) => {

                        return (

                            <tr key={index}>

                                <td>{item.name}</td>

                                <td>{item.mobno}</td>

                                <td>{item.email}</td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>

        </div>

    )

}

export default App