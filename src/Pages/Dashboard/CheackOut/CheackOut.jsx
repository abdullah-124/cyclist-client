import { faBackward, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const CheackOut = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const loadeData = (email) => {
      if (user.email === email) {
        fetch(`http://localhost:4000/myOrder/${email}`)
          .then((res) => res.json())
          .then((data) => setMyOrders(data));
      } else {
        alert("Invalid Email");
      }
    };
    loadeData(user.email);
  }, [user.email]);
  let totalPrice = 0;
  for (let order of myOrders) {
    //   console.log(order)
    totalPrice += parseInt(order.price);
  }
  return (
    <>
      <div className="pt-3 mx-auto">
        <Link className="btn-main" to={-1}>
          <FontAwesomeIcon icon={faBackward} />
        </Link>
        <h5 className="mt-4 text-secondary">Cheack Out Now</h5>
        <small className="text-primary">{myOrders.length} Item</small>
        <div className="shadow-lg p-3 rounded-3">
          <div className="d-flex justify-content-between">
            <p className="">#</p>
            <h6 className="">Name</h6>
            <h5 className="">Price</h5>
          </div>
          <hr className="text-muted" />
          {myOrders.map((order, index) => (
            <div
              key={order._id}
              className="d-flex text-left justify-content-between"
            >
              <p className="">{index + 1}</p>
              <h6 className="">{order.name}</h6>
              <h5 className="">${order.price}</h5>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h3>Total Amount</h3>
            <div>
              <h2> ${totalPrice}</h2>
              <button onClick={()=> alert('Payment System Comming Soon')} className="btn-main">
                <FontAwesomeIcon icon={faCoins} /> Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheackOut;
