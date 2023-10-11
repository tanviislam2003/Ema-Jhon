import React, { useEffect, useState } from 'react';
import'./Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setproducts] = useState([])
    const [cart,setCart] =useState([])
     
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data));
        },[])

        const handleAddToCart =(product) =>{
        //    cart.push(product);
           const newCart =[...cart, product];
           setCart(newCart);
          }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product key = {product.id} product={product}
                    
                    handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="card-container">
                <h4>Order Summary</h4>
                <p>Selected Items :{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;
