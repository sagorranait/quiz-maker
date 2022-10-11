import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { getSingleQuiz } from '../../helper/api'
import Quiz from '../Quiz/Quiz';
import './Quizzes.css'

const Quizzes = () => {
  const [marks, setMarks] = useState({correct: 0, wrong: 0});

  const quizzes = useLoaderData();
  const {logo, name, questions, total} = quizzes.data;

  return (
    <div className='quiz-area'>
      <Container>
        <Row>
          <Col sm={12} md={9} lg={9} xl={9} xxl={9}>
            <div className='quizzes'>
              {questions.map((data, index) => <Quiz key={data.id} quizInfo={data} number={index} mark={setMarks} />)}
            </div>
          </Col>
          <Col sm={12} md={3} lg={3} xl={3} xxl={3}>
            <div className='quizzes-sidebar'>
              <div className='sidebar-image'>
                <img src={logo} alt={name}/>
              </div>
              <h4>{name}</h4>
              <p>Total Quiz &nbsp; : {total}</p>
              <p>Correct &nbsp; &nbsp; &nbsp; : {marks.correct}</p>
              <p>Wrong &nbsp; &nbsp; &nbsp; &nbsp; : {marks.wrong}</p>
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