import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

 const ShowProduct = () => {


  const [isProductData,setProductData] = useState([]);
  const navigate = useNavigate();



async function getUser() {
  try {
    const response = await axios.get('http://localhost:5257/api/Products');
    console.log(response.data);
    // productsData = response.data;
    setProductData(response.data)

  } catch (error) {
    console.error(error);
  }
}

async function deleteProducts(id){
  try {
    const response = await axios.delete(`http://localhost:5257/api/Products?id=${id}`);
    setProductData(isProductData.filter(filterItem => console.log(filterItem.id != id)))
    getUser();
  } catch (error) {
    console.error(error)
  }
}


useEffect(()=>{
    getUser();

},[])



  const UpdateProduct = (id)=>{
      navigate(`/updateProduct/${id}`)
  }



  return (
   <>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Description</th>
        <th>Product Image</th>
      </tr>
    </thead>
    <tbody>

    {
      isProductData.map(({id, prodName, prodPrice, prodDesc,prodImage}) => (

        <tr key={id}>
          <td>{id}</td>
          <td >{prodName}</td>
          <td>{prodPrice}</td>
          <td>{prodDesc}</td>
          <td><img src={prodImage} alt="Not Image Found" width="100px" /></td>
          <td><button className='btn btn-danger' onClick={()=>deleteProducts(id)}>Delete</button></td>
          <td><button className='btn btn-warning' onClick={()=>UpdateProduct(id)}>Update</button></td>
        </tr>
      ))
    }
      
    </tbody>
  </Table>
   </>
  )
}
export default ShowProduct;