import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { getSingleQuiz } from '../../helper/api'
import Quiz from '../Quiz/Quiz';
import QuizChart from '../QuizChart/QuizChart';
import './Quizzes.css'

const Quizzes = () => {
  const [marks, setMarks] = useState({correct: 0, wrong: 0});

  const quizzes = useLoaderData();
  const {logo, name, questions, total} = quizzes.data;

  return (
    <div className='quiz-area'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={8} xl={8} xxl={8}>
            <div className='quizzes'>
              {questions.map((data, index) => <Quiz key={data.id} quizInfo={data} number={index} mark={setMarks} />)}
            </div>
          </Col>
          <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
            <div className='quizzes-sidebar'>
              <div className='sidebar-image'>
                <img src={logo} alt={name}/>
              </div>
              <h4>Quiz Of {name}</h4>
              <QuizChart marks={marks}/>
              <div className='quizzes-marks'>
                <p>Total Quiz : {total}</p>
                <p>Correct : {marks.correct}</p>
                <p>Wrong : {marks.wrong}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const quizLoader = ({params}) => {
  return getSingleQuiz(params.quizId);
}

export default Quizzes