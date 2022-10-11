import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './QuizChart.css'

const QuizChart = ({marks}) => {
   const data = [{ name: 'Correct', value: marks.correct },{ name: 'Worng', value: marks.wrong }];
   const COLORS = ['#50C878', '#FF5733'];
   const RADIAN = Math.PI / 180;

   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
   };
  return (
    <div className='quizzes-chart'>
        {
            data[0].value === 0 && data[1].value === 0 ? 
            <div className='default-chart'>0%</div>
            : 
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        stroke='none'
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        }        
    </div>
  )
}

export default QuizChart