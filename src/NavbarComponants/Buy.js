import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../Cssfille/buypage.css'
import ListGroup from 'react-bootstrap/ListGroup';

function Buy() {
    const [product, setProduct] = useState({});
    const { productId, count } = useParams();

    var Quantity = parseInt(count); // Convert count to integer
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1);

    }
    const payment = () => {
        let mycard = {
            "customerId": 1,
            "product": product.productId,
            "tranType": "online",
            "productExpiryDate": product.productOffPriceExpiryDate,
            "isActive": false,

        };
        let demo = JSON.stringify(mycard);
        console.log(JSON.parse(demo));
        fetch(" ", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => r.json())
            .then((res) => { console.log("data added succesfully") })
            .catch(error => {
                console.error("Error:", error);
            })
    };

    useEffect(() => {
        fetch("http://localhost:8080/api/products/getProduct/" + productId)
            .then(res => res.json())
            .then((result) => {
                setProduct(result);

            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

    }, [productId]);

    // Calculate the total price
    var totalPrice = Quantity * product.productOfferPrice;

    return (
        <div className="checkout-container">
    <Card className="checkout-card" style={{ width: '18rem' }}>
        <ListGroup variant="flush">
            <ListGroup.Item>Product name: {product.productName}</ListGroup.Item>
            <ListGroup.Item>Quantity: {Quantity}</ListGroup.Item>
            <ListGroup.Item>Total price: {totalPrice}</ListGroup.Item>
        </ListGroup>
    </Card>
    <div className="buttons-container">
        <Row>
            <Col className="button-col">
                <Button variant="dark" onClick={Back}>Cancel</Button>
            </Col>
            <Col className="button-col">
                <Button variant="dark" onClick={payment}>Purchase</Button>
            </Col>
        </Row>
    </div>
</div>

    );
}

export default Buy;
