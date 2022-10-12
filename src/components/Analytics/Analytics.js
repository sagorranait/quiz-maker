import './Analytics.css'
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizMakerTitle from '../../Layouts/Title/QuizMakerTitle';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const quiz = useLoaderData();

  return (
    <Container>
      <div className='quiz-analytics'>
        <QuizMakerTitle title={'Quiz Analytics'}/>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width='100%'
              height='100%'
              data={quiz.data}
              cx="40%"
              cy="40%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke='#ffc000a1' />
              <XAxis dataKey="name" stroke='#FF8A00' />
              <YAxis stroke='#FF8A00' />
              <Tooltip />
              <Area type="monotone" dataKey="total" stroke="#FF8A00" fill="#FFF7DF" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  )
}

export default Analytics