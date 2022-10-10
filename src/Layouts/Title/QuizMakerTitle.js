import './QuizMakerTitle.css';

const QuizMakerTitle = ({title, description}) => {
  return (
    <div className='quizMaker-title text-center'>
        <h2 className='fw-bold'>{title}</h2>
        {description && <p>{description}</p>}
    </div>
  )
}

export default QuizMakerTitle