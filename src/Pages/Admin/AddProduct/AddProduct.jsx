import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./form.css";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const handleSubmit = (e) => {
    // console.log(product)
    e.preventDefault()
    fetch('https://pacific-ridge-36287.herokuapp.com/addProduct',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(product)
    })
    .then(res => {
      if(res.status === 200){
        console.log(res)
        alert(`${product.name} added`)
        e.preventDefault()
      }
      
    })
    
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    // console.log(newProduct);
    setProduct(newProduct);
  };
  return (
    <>
      <div className="col-12 col-lg-6 mx-auto mt-3   form">
        <form onSubmit={handleSubmit} className="px-lg-5 py-5" action="">
          <h4 className="text-center text-light p-0">Add Product</h4>
          <div>
            <input
            required
              onBlur={handleOnBlur}
              placeholder="Product Name"
              type="text"
              name="name"
            />
          </div>
          <div>
            <input
            required
              onBlur={handleOnBlur}
              placeholder="Product Price"
              type="number"
              name="price"
            />
          </div>
          <div>
            <input
            required
              onBlur={handleOnBlur}
              placeholder="Photo URL"
              type="text"
              name="image"
            />
          </div>
          <div>
            <textarea
            required
              onBlur={handleOnBlur}
              placeholder="Product Description"
              name="desc"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button className="btn-main" type="submit">
              <FontAwesomeIcon icon={faCloudArrowUp} /> Add Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
