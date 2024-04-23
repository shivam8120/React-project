import React, { useState } from 'react'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import TotalScore from './TotalScore'


const GamePlay = () => {

  const [selectedNumber,setSelectedNumber]=  useState(0)
  const [Number, setNumber] = useState(1)
  const [score,setScore] = useState(0)

  function randomNumber() {
    let randomNumbers = (Math.floor(Math.random() * 6) +1);
    console.log(randomNumbers);
    setNumber(randomNumbers)

    if(selectedNumber === randomNumbers){
      setScore((prev) => prev + randomNumbers)
    }else{
      setScore((prev) => prev - 2)
    }
    
}

 
  return (
    <div>
        <main>
            <TotalScore score = {score}/>
            <NumberSelector selectedNumber ={selectedNumber} setSelectedNumber= {setSelectedNumber}/>
        </main>
        <RollDice Number= {Number} randomNumber={randomNumber} setScore ={setScore}/>
        
    </div>
  )
}

export default GamePlay