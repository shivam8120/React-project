import { useState } from 'react'
import Rules from './Rules';

const RollDice = ({
    Number,randomNumber,setScore
}) => {

    const [showRules,setShowRules] = useState(false)

    

  
    return (
        <div className="roll-dice">
            <img onClick={randomNumber}
                src={`/image/dice_${Number}.png`} />
                <p>Click On Dice to roll</p>
                <button id='reset-score' onClick={() => setScore(0)}>Reset Score</button><br/>
                <button id='show-rules' onClick={() => {
                     setShowRules((prev) => !prev)
                }}>Show Rules</button>
               {
                 showRules ? <Rules/> : ""
               }
        </div>
    )
}

export default RollDice