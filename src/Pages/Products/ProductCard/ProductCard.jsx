import React from 'react';
import { Link } from 'react-router-dom'
import "./card.css"
// import img from '../../Footer/bicycle.svg'

const ProductCard = ({product}) => {
    const {_id, name, price,image,discount} = product
    return (
        <div className='col mx-auto mt-3  '>
            <div className="row product-card p-2">
            <div className="col-lg-5 col-12">
                {discount&& <span>{discount}% off</span>}
                <img className='img-fluid' src={image} alt="" />
            </div>
            <article className="col-lg-7 col-12">
                <h4 className='fw-bold'>{name}</h4>
                <h3>${price}</h3>
                <Link to={`/products/${_id}`}><button className='btn-main'>more</button></Link>
            </article>
            </div>
        </div>
    );
};

export default ProductCard;