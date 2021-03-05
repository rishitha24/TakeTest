import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/context'
import '../App.css'
import tickIcon from '../assets/correct.png'
import { Questions } from '../Helpers/Questions'

const EndScreen = () => {

    const { score, setScore, setGameState } = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    }
    var percentageScored = (score / Questions.length) * 100;
    return (
        <div className="endScreen">
            <h2><img alt={''} src={tickIcon} width={100} /></h2>
            <h1>You have succesfully submitted the Assesment</h1>
            <div>
                <h3>{score} / {Questions.length} </h3>
                <p>-Questions asked: {Questions.length}</p>
                <p>-Questions answered right: {score}</p>
                <p>-Your Score:{percentageScored}% </p>
            </div>
            <button onClick={restartQuiz}> Restart Quiz </button>
        </div>
    )
}

export default EndScreen
