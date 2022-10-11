import './QuizOption.css'

const QuizOption = ({label, answer}) => {

  return (
    <div className='quiz-option'>
        <p>{label}</p>
    </div>
  )
}

export default QuizOption