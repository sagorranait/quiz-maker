import { useState } from 'react';
import './QuizOption.css'

const QuizOption = ({label, answer, click, marks}) => {
  const [isCorrect, setIsCorrect] = useState('');
  

  const isCorrectAnswer = (userAnswer) => {
    if (answer === userAnswer) {
      marks(preMarks =>{
        return {correct: preMarks.correct + 1, wrong: preMarks.wrong};
      });
      setIsCorrect('right');
    } else {
      marks(preMarks =>{
        return {correct: preMarks.correct, wrong: preMarks.wrong + 1};
      });
      setIsCorrect('wrong');
    }
    click.setClicked(true);
  }

  return (
    <div className={`quiz-option ${isCorrect}`} onClick={()=> click.clicked || isCorrectAnswer(label)}>
        <p>{label}</p>
    </div>
  )
}

export default QuizOption