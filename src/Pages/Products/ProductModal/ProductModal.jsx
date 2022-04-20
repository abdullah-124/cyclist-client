import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const ProductModal = ({ show, handleClose, product }) => {
  const { name, price, image, discount, desc } = product;
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleOrder = () => {
    order.email = user?.email;
    order.coustomer = user?.displayName;
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
    } else {
      navigate("/login");
    }
  };
  const addToCart = () => {
    if (user.email) {
      handleOrder();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div>
              <img className="img-fluid" src={image} alt="" />
              <div>
                <p className="text-primary">{name}</p>
                {discount && <span>{discount}% Off now</span>}
              </div>
              <h2 className="text-left">Price: ${price}</h2>
              <article>{desc}</article>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={addToCart} className="btn-regular">
            <FontAwesomeIcon icon={faCartPlus} /> Add To Cart
          </button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
