import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../Hooks/useAuth";

const ProductInfo = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [product, setProduct] = useState("");
  const [order, setOrder] = useState({});
  const params = useParams();
  const id = params.id;
  const { name, desc, price, image } = product;
  // console.log(id)
  //load data
  useEffect(() => {
    fetch(`https://pacific-ridge-36287.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  // send data in order collection
  const addToCart = () => {
    order.email = user.email;
    order.coustomer = user.displayName;
    order.name = product.name;
    order.price = product.price;
    order.status = "Pending";

    // console.log(order)
    if (user.email) {
      fetch("https://pacific-ridge-36287.herokuapp.com/addToCart", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      }).then((res) => {
        if (res.status === 200) {
          alert(`${order.name} add to cart`);
        }
      });
    }
    else{
      navigate('/login')
    }
  };
  return (
    <>
      <Header />
      <Link to={-1}>
        <button className="btn-main mt-3">
          <FontAwesomeIcon icon={faBackward} />
        </button>
      </Link>
      <div className=" container align-items-center d-flex h-100">
        <div className="row row-cols-1 align-items-center row-cols-lg-2">
          <div className="col">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col">
            <h1 className="text-primary text-left">{name}</h1>
            <h3 className="text-success">Price: ${price}</h3>
            <p className="fs-5 mt-3">{desc}</p>

            <button onClick={addToCart} className="btn-regular mt-2">
              <FontAwesomeIcon icon={faCartPlus} /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
