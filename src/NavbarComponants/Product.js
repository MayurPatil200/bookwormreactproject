import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";






function Product() {
    const [Typeproduct, setProductType] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/allproductTypes") // Replace with the actual URL
            .then((res) => res.json())
            .then((result) => {
                setProductType(result);
            });
    }, []);

    return (
        <div className='container'>
            <h1>Products</h1>
            <hr />                                          
            <div>
                {Typeproduct.map((type, index) => (
                    <div key={index}>
                        <div className="grid grid-two-column">
                            <div>
                                <h4>{type.typeDesc}</h4>
                                <h6>{type.typeDesc} store</h6>
                                <NavLink to={"/shop/"+type.typeDesc}>
                                    <Button>shop now</Button>
                                </NavLink>
                            </div>

                        </div>
                        <hr/>
                    </div>
                   
                ))}
            </div>
        </div>
    );
}

export default Product;
