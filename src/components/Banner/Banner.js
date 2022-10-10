import { Col, Container, Row } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
  return (
    <section className='banner-area'>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className='content d-flex align-items-start justify-content-center flex-column'>
                <h1>Test your <span>knowage</span> today.</h1>
                <p>We have made some fun and interesting quizzes. Regardless of whether you're a beginner, want to learn more, or just want to have fun.</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className='image'>
                <img src='./images/banner.png' alt='banner_image' />
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Banner