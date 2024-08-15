import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';


const Fig = ({img})=>{
    return <>
    
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={img}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
    
    
    </>



}


export default Fig