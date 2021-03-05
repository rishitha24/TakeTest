import React, { useState, useContext } from 'react'
import { Questions } from '../Helpers/Questions'
import { QuizContext } from '../Helpers/context'

const Quiz = () => {

    // const {gameState, setGameState} = useGameState(QuizContext);
    const { score, setScore, setGameState } = useContext(QuizContext)

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }

        setCurrQuestion(currQuestion + 1);
    }

    const prevQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }

        if (currQuestion - 1 < 0) {
            setCurrQuestion(3);
        }
        else {
            setCurrQuestion(currQuestion - 1);
        }
    }

    const updateSubmission = () => {

    }

    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }

        setGameState('endScreen');
    }

    return (
        <div className="Quiz">
            <p>Attempt Questions Here</p>
            <h2>{Questions[currQuestion].prompt}</h2>

            <div className="options">
                <button onClick={() => setOptionChosen('A')}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen('B')}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen('C')}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen('D')}>{Questions[currQuestion].optionD}</button>
            </div>

            {currQuestion == Questions.length - 1 ? (
                <>
                    <button onClick={prevQuestion}>Previous Question</button>
                    <button onClick={finishQuiz}>Finish Quiz</button>
                </>
            ) : (
                    <>
                        <button onClick={prevQuestion}>Previous Question</button>
                        <button onClick={nextQuestion}>Next Question</button>
                    </>
                )
            }

        
        </div>
    )
}

export default Quiz
