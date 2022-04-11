import { faBank, faBatteryEmpty, faTachometer, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import useAuth from "../../../Hooks/useAuth"
import deleteOrder from "../../Shared/handleDelete/handleDelete"


const MyOrder = () => {
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
  return myOrders.length === 0 ? <h1><FontAwesomeIcon icon={faBatteryEmpty}/></h1> : (
    <>
      <h3 className="text-primary m-3"><FontAwesomeIcon className="text-muted" icon={faTachometer} /> My Order</h3>
      <Table striped bordered hover size="sm">
        <thead className="fixed">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Coustomer</th>
            <th>Status</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.coustomer}</td>
              <td>{product.status}</td>
              <td className="text-center"><FontAwesomeIcon  onClick={()=>deleteOrder(product._id)} icon={faTrashAlt} /></td>
            </tr>

          ))}
        </tbody>
      </Table>
      <Link to="/dashboard/cheackOut"><button className="btn-regular"><FontAwesomeIcon icon={faBank} /> Cheack Out</button></Link>
    </>
  );
};

export default MyOrder;
