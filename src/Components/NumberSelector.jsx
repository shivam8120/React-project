import {useState} from 'react'

const NumberSelector = ({selectedNumber,setSelectedNumber}) => {

    const Number = [1,2,3,4,5,6];

   

   
    
  return ( 
     <div className="Number-box">
        <div className="Number-box-1">
       
       {
            Number.map((value,index) => 
            <li key={index}
           
            onClick={() => setSelectedNumber(value)}
           
            >{value}</li>
         )
        }
     </div>
     <p>Select a Number</p>
    
     </div>
     
     
  )

}

export default NumberSelector