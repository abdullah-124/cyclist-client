import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header'
import Loader from '../../Shared/Loader/Loader'
import ProductCard from '../ProductCard/ProductCard'

const Products = ({slice}) => {
    const [products, setProducts] = useState([])
    //item
    useEffect(()=>{
        fetch('https://pacific-ridge-36287.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
   
        
    return products.length === 0 ? <Loader /> : (
        <>
        <Header />
        <div className='mt-1 '>
            <div className='text-center mb-4'>
                <h2 className='m-0 text-primary'>Product</h2>
                <p className='m-0 text-muted'>We Sold</p>
            </div>
            <div className="container m-auto row row-cols-1 row-cols-lg-2">
            {
                products.slice(0, slice).map(product => <ProductCard key={product._id} product={product} />)
            }
            </div>
        </div>
        </>
    );
};

export default Products;