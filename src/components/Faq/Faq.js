import { Accordion, Container } from 'react-bootstrap'
import QuizMakerTitle from '../../Layouts/Title/QuizMakerTitle'
import './Faq.css'

const Faq = () => {
  return (
    <Container>
      <QuizMakerTitle 
        title='Frequently Asked Questions' 
        description='Here are some common questions about Reactjs.' 
      />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the purpose of a react router?</Accordion.Header>
          <Accordion.Body>
            Customer-Side routing is made possible with React Router. With client-side routing, you may update a link's URL without having to request the server for new content. Instead, to refresh the page with fresh data, your app might render some new UI right away and execute data queries with a fetch. This makes it possible for users to have speedier user experiences because the browser doesn't have to request a completely new document or reevaluate CSS and JavaScript files for the following page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does context api work?</Accordion.Header>
          <Accordion.Body>
            In a React application, Data is provided top-down via <b>props</b>, However, this usage might be challenging for specific sorts of properties that are needed by several application components. Context offers an alternative to manually providing props down on every level to transfer data across the component tree.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is useRef ? How does it operate?</Accordion.Header>
          <Accordion.Body>
            One of the common hooks offered by React is useRef. It's a function that returns back a mutable ref object with the given argument initialized in its current property. The returned object will remain persistent for the whole component lifespan. <u>Accessing DOM nodes or React components</u> and <u>keeping mutable variables</u> are the two major uses of useRef. <br/><br/>
            <b>Accessing DOM nodes or React components</b> <br/>
            Generally speaking, we want to delegate all DOM manipulation to React. UseRef can, however, be used in specific situations without causing problems. To directly access an element in the DOM in React, we may add the ref property to the element.<br/><br/>
            <b>Keeping mutable variables</b> <br/>
            The built-in React hook useRef(initialValue) receives one parameter as the initial value and returns a reference. An object with the unique attribute current is referred to as a reference.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>    
  )
}

export default Faq