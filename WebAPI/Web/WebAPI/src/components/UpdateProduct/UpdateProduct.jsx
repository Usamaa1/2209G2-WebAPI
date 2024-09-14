import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const UpdateProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const prodNameRef = useRef(null);
    const prodPriceRef = useRef(null);
    const prodDescRef = useRef(null);



    console.log(id)


    async function getUser() {
        try {
            const response = await axios.get(`http://localhost:5257/api/Products/${id}`);
            console.log(response.data);
            let data = response.data;
            console.log(prodNameRef.current.value)

            prodNameRef.current.value = data.prodName
            prodPriceRef.current.value = data.prodPrice
            prodDescRef.current.value = data.prodDesc


        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();

    }, [])





    async function updateProduct() {

        const {data} = await axios.put(`http://localhost:5257/api/Products/${id}`, {
            prodName:  prodNameRef.current.value,
            prodDesc: prodDescRef.current.value,
            prodPrice:  prodPriceRef.current.value
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        navigate('/')
        console.log(prodNameRef.current.value , prodDescRef.current.value , Number(prodPriceRef.current.value))
    }


    return (

        <>
            <h1 className='text-center'>Update Product</h1>
            <Container>
                <Form>
                    <Row >
                        <Col className='m-2'>
                            <Form.Control placeholder="Product Name" ref={prodNameRef} />
                        </Col>
                        <Col className='m-2'>
                            <Form.Control placeholder="Product Price" ref={prodPriceRef} />
                        </Col>

                    </Row>
                    <Row>
                        <Col className='m-2'>
                            <Form.Control placeholder="Product Description" ref={prodDescRef} />
                        </Col>

                    </Row>
                    <Row>
                        <Col className='m-2'>
                            <Button variant="primary" size="sm" onClick={updateProduct}>Update Product</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>

    )
}

export default UpdateProduct