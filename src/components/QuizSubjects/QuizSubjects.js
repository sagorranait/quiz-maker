import './QuizSubjects.css';
import { getQuiz } from '../../helper/api';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import QuizMakerTitle from '../../Layouts/Title/QuizMakerTitle';
import SingleSubject from '../SingleSubject/SingleSubject';

const QuizSubjects = () => {
  const {data} = useLoaderData();
  
  return (
    <div className='quiz-subjects'>
        <Container>
            <Row>
                <Col>
                    <QuizMakerTitle title='Quiz Subjects'/>
                    <div className='single-quiz'>
                        {data.map(quiz => <SingleSubject key={quiz.id} quiz={quiz}/>)}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export const quizLoader = () => {
 return getQuiz();
}

export default QuizSubjects