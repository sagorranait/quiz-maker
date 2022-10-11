import { useState } from 'react';
import {toast} from 'react-toastify';
import QuizOption from '../QuizOption/QuizOption';
import './Quiz.css'

const Quiz = ({quizInfo, number, mark}) => {
  const {correctAnswer, options, question} = quizInfo;
  const [clicked, setClicked] = useState(false);
  
  const showCorrectAnswer = () => {
    toast.info(`Answer is : ${correctAnswer}`, { position: "top-center", autoClose: 3000});
  }

  return (
    <div className='quiz'>
        <div className='quiz-title d-flex align-items-center justify-content-between'>
            <p>
                Quiz {number + 1} : &nbsp;
                {
                  question
                  .replaceAll("<p>", "")
                  ?.replaceAll("</p>", "")
                  ?.replaceAll('&nbsp;', ' ')
                  ?.replaceAll('<span style="background-color: transparent; color: rgb(0, 0, 0);">', ' ')
                  ?.replaceAll('</span>', ' ')
                }
              </p>
            <span className='see-answer' onClick={showCorrectAnswer}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
        </div>
        <div className='quiz-options'>          
          {options.map((option, index) => <QuizOption 
            key={index} 
            label={option} 
            number={index}
            click = {{clicked, setClicked}}
            marks = {mark}
            answer={correctAnswer} 
          />)}
        </div>
    </div>
  )
}

export default Quiz