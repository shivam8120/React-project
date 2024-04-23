import { useState } from 'react'
import GamePlay from './Components/GamePlay.jsx';
import StartGame from './Components/StartGame.jsx';




function App() {

  const [isGameStarted,setIsGameStarted] = useState(true)

function toggleGameplay () {
  setIsGameStarted((prev) => !prev)
}

  return (<>
  {
  isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGameplay}/>
  }
  </>
          
           
  )
        
}

export default App
