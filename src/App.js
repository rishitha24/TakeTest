
import './App.css';
import React, { useState } from 'react'
import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import Quiz from './components/Quiz'
import {QuizContext} from './Helpers/context'

function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
    
      <QuizContext.Provider value ={{gameState, setGameState, score, setScore}}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
