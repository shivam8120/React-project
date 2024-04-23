import React from 'react'

const StartGame = ( {toggle} ) => {
  return (
    <div className="conatiner">
            <div className="page1">
              <img src="/image/dices.png"/>
              <div className="page1-content">
              <h1>Dice Game</h1>
              <button onClick = {toggle}>Play now</button>
              </div>
            </div>
          </div>
  )
}

export default StartGame