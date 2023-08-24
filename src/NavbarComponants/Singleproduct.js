import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../Cssfille/Sinngle.css'


function Singlepageproduct() {
    const [product, setProduct] = useState({});

    const { productId } = useParams();
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    }

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



    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <Col>
                <Card className="product-card">
                    <div className="image-container">
                        <Card.Img
                            className="product-image"
                            variant="top"
                            src={product.image}
                        />
                    </div>
                    <Card.Body className="product-details">
                        <div>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>Short Description: {product.productDescriptionShort}</Card.Text>
                            <Card.Text>Cost Price: {product.productSpCost}</Card.Text>
                            <Card.Text>Base Price: {product.productBasePrice}</Card.Text>
                            <Card.Text>Offer Price: {product.productOfferPrice}</Card.Text>
                            <Card.Text>Expiry Date: {product.productOffPriceExpiryDate}</Card.Text>
                        </div>
                    </Card.Body>
                    <div className="quantity-selector">
                        <h6>Select Quantity</h6>
                        <div className="quantity-controls">
                            <Button variant="dark" onClick={increment}>+</Button>
                            <p>{count}</p>
                            <Button variant="dark" onClick={decrement}>-</Button>
                        </div>
                    </div>
                    <NavLink to={"/Buy/" + product.productId + "/" + count}>
                        <Button variant="secondary">Buy</Button>
                    </NavLink>
                    <div>
                    <p>More Descripation</p>
                    <p>{product.productDescriptionLong}</p>
                    </div>
                </Card>

            </Col>
        </div>
    );
}

export default Singlepageproduct;
