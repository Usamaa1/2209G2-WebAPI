import {React} from 'react'
import { createRoot } from 'react-dom/client'
import CustomCards from './card/card';
import {CustomTable} from './card/card';
import Figure from 'react-bootstrap/Figure';
import img from './assets/1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fig from './Fig/fig';


const Main = ()=>{
  return <>
  <Container>
  <Row>
    <Col>
    
    <Fig img={img}></Fig>
    </Col>
    <Col>
      <CustomCards></CustomCards>
      <CustomCards></CustomCards>
    </Col>
  </Row>
  <Row>
    <Col>
    <CustomTable></CustomTable>
    
    </Col>
  </Row>
  </Container>
  
  
  </>
}





createRoot(document.getElementById('root')).render(
<Main></Main>
)
