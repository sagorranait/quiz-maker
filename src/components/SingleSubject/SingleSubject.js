import { Link } from 'react-router-dom';
import './SingleSubject.css'

const SingleSubject = ({quiz}) => {
  const {id, logo, name, total} = quiz;
  return (
    <div className='subject d-flex align-items-center justify-content-between'>
        <div className='subject-title d-flex align-items-center'>
            <div className='subject-image'>
                <img src={logo} alt={name} />
            </div>
            <h3>{name}</h3>
        </div>
        <p>Total Quiz : {total}</p>
        <Link to={`./quizzes/${id}`} className='d-flex align-items-center flex-row gap-2'>
            <span>Start</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </span>
        </Link>
    </div>
  )
}

export default SingleSubject