import { useState } from 'react';
import {toast} from 'react-toastify';
import './QuizOption.css';


const QuizOption = ({label, number, answer, click, marks}) => {
  const [isCorrect, setIsCorrect] = useState('');
  

  const isCorrectAnswer = (userAnswer) => {
    if (answer === userAnswer) {
      marks(preMarks =>{ return {correct: preMarks.correct + 1, wrong: preMarks.wrong}});
      toast.success('Correct Answer', { position: "top-center", autoClose: 1000});
      setIsCorrect('right');
    } else {
      marks(preMarks =>{ return {correct: preMarks.correct, wrong: preMarks.wrong + 1}});
      toast.error('Wrong Answer', { position: "top-center", autoClose: 1000});
      setIsCorrect('wrong');
    }
    click.setClicked(true);
  }

  return (
      <div className={`quiz-option ${isCorrect}`} onClick={()=> click.clicked || isCorrectAnswer(label)}>
          <p>{number+1}. {label}</p>
          
      </div>
  )
}

export default QuizOption