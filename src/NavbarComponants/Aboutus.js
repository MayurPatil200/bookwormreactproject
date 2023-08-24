import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Cssfille/sub.css';
// Import your custom CSS file

function Subproject() {
    const [products, setProducts] = useState([]);
    const { typedesc } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/products/getproductbytype/" + typedesc)
            .then(res => res.json())
            .then((result) => {
                setProducts(result);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [typedesc]);

    return (
        <div >
            
                {products.map((product, index) => (
                    <div key={index} className="card-container">
                        <div className="card">
                            <div className="image_box mb-3">
                                {/* <img src={img} alt="Image" /> */}
                                <img src={"Images/book2.jpg"} alt="Image" />
                            </div>
                            <div className="card-body p-0">
                                <p className='card-title'>{product.productName}</p>
                                <p className='card_desc'> {product.productDescriptionShort}</p>
                                <p>Price - {product.productBasePrice}</p>
                                <NavLink to={"/viewproduct/" + product.productId}>
                                    <Button variant="secondary">view</Button>{' '}
                                    <NavLink to={"/shop/" + product.typeDesc}>
                                    <Button N variant="success">add</Button>{' '}
                                    </NavLink>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
      
    )
}

export default Subproject;
<Row xs={1} md={2} className="g-4">
{products.from({ length: 4 }).map((_, idx) => (
  <Col key={idx}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>