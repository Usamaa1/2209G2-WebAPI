import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
const AddProduct = () => {




    const prodNameInpt = useRef(null);
    const prodPriceInpt = useRef(null);
    const prodDescInpt = useRef(null);
    const prodImageInpt = useRef(null);

    let [imageURL,setImageURL] = useState(null);

    const addingProduct = () => {


        // console.log(prodImageInpt.current.files[0])


        if(prodImageInpt.current.files[0])
        {
            let fileReader = new FileReader();
            fileReader.addEventListener('loadend',(event) => {
                console.log(fileReader.result)


                try {
                    const { data } =  axios.post('http://localhost:5257/api/Products',
                        {
                            prodName: prodNameInpt.current.value,
                            prodDesc: prodDescInpt.current.value,
                            prodPrice: prodPriceInpt.current.value,
                            prodImage: fileReader.result
                        }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    console.log(data);
                    prodNameInpt.current.value = ''
                    prodDescInpt.current.value = ''
                    prodPriceInpt.current.value = ''
        
        
                } catch (error) {
                    console.error(error)
                }
                // setImageURL(fileReader.result);
            })
             fileReader.readAsDataURL(prodImageInpt.current.files[0])
     
        }

       




     
    }


    return (
        <Container>
            <h1 className='text-center m-5'>Add Products</h1>
            <Form>
                <Row >
                    <Col className='m-2'>
                        <Form.Control placeholder="Product Name" ref={prodNameInpt} />
                    </Col>
                    <Col className='m-2'>
                        <Form.Control placeholder="Product Price" ref={prodPriceInpt} />
                    </Col>

                </Row>
                <Row>
                    <Col className='m-2'>
                        <Form.Control placeholder="Product Description" ref={prodDescInpt} />
                    </Col>

                </Row>
                <Row>
                    <Col className='m-2'>
                        <input className='form-control' type="file" ref={prodImageInpt} />
                    </Col>
                </Row>
                <Row>
                    <Col className='m-2'>
                        <Button variant="primary" size="sm" onClick={addingProduct}>Add Product</Button>
                    </Col>
                </Row>
            </Form>
            <img src={imageURL} alt="No Image Found" width="200px" />
        </Container>
    )
}
export default AddProduct;