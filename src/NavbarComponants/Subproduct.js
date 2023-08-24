import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Cssfille/sub.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            
            <Row xs={1} md={2} className=" d-flex g-4">
            {products.map((product, index) => (
                <Col lg={2} className="justify-content-center" key={index}>
                <Card style={{ height: '330px', width: '200px' }}>
                    <Card.Img variant="top" height="150px" src="/images/viking.jpg" alt="Image" />
                    <Card.Body>
                        <Card.Text><h6>Name:{product.productName}</h6></Card.Text>
                        <Card.Text>{product.productDescriptionShort}</Card.Text>
                        <Card.Text>Price - {product.productBasePrice}</Card.Text>
                        <NavLink to={"/viewproduct/" + product.productId}>
                            <Button variant="secondary">View</Button>{' '}
                        </NavLink>
                        <NavLink to={"/shop/" + product.typeDesc}>
                            <Button variant="success">Add cart</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Col>
            
            ))}
        </Row>
            </div>
      
    )
}

export default Subproject;
