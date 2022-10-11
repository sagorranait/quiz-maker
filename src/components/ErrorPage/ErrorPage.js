import { Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page">
        <Container>
            <div class="errorPage-content">
                <img src='./images/404.png' alt='404 Page' />
                <p>Sorry, an unexpected error has occurred.</p>
                <p>Message : <i>{error.statusText || error.message}</i></p>
                <Link to={'/'}>Go to Home Page</Link>
            </div>
        </Container>
    </div>
  )
}

export default ErrorPage