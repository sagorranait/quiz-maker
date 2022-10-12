import './QuizSubjects.css';
import { getQuizSubjects } from '../../helper/api';
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
                <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
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

export const subjectLoader = () => {
 return getQuizSubjects();
}

export default QuizSubjects