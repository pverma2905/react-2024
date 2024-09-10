import { useState } from 'react';
import './App.css';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

function App() {

  const initialData = [
    {id:1, description:'product 1', quantity:10, price:10 },
    {id:2, description:'product 2', quantity:9, price:9 },
    {id:3, description:'product 3', quantity:8, price:8 },
    {id:4, description:'product 4', quantity:7, price:7 },
    {id:4, description:'product 5', quantity:6, price:6 },
    {id:6, description:'product 6', quantity:5, price:5 },
    {id:7, description:'product 7', quantity:4, price:4 },
    {id:8, description:'product 8', quantity:3, price:3 },
    {id:9, description:'product 9', quantity:2, price:2 },
    {id:10, description:'product 10', quantity:1, price:1 },
    
  ]

  const [data, setData] = useState(initialData);
  const doc = new jsPDF()

  const exportPDFHandler = ()=>{

    // example 1
    console.log("Table data exported")
    // doc.autoTable({ html: '#product-table' })
    // doc.save('products.pdf')

    // example2
    autoTable(doc,{ html: '#product-table', bodyStyles:{fillColor:'yellow'}, columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } }, // Cells in first column centered and green
      margin: { top: 10 },  })
    doc.save('products.pdf')
  }
  return (
    <>
    <button className='export-btn' onClick={exportPDFHandler}>Export Pdf</button>
    <table style={{borderCollapse:'collapse', width:'100%'}} id='product-table'>
      <thead>
        <tr style={{borderBottom:'1px solid #ddd', background:'orange'}} >
          <th style={cellStyle}>ID</th>
          <th style={cellStyle}>Description</th>
          <th style={cellStyle}>Quantiity</th>
          <th style={cellStyle}>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>(
        <tr key={item.id} style={{borderBottom:'1px solid #ddd'}}>
        <td style={cellStyle}>{item.id}</td>
        <td style={cellStyle}>{item.description}</td>
        <td style={cellStyle}>{item.quantity}</td>
        <td style={cellStyle}>{item.price.toFixed(2)}</td>
      </tr>  
        ))}
        
      </tbody>

    </table>
    </>
  );
}

const cellStyle = {
  padding:'12px',
  textAlign:'left'
}

export default App;
