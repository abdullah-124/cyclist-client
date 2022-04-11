import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loader from "../../Shared/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWrench } from "@fortawesome/free-solid-svg-icons"
import ManageTable from "./ManageTable"

const ManageOrder = () => {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    fetch("http://localhost:4000/manageOrder")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return products.length === 0 ? (
    <Loader />
  ) : (
    <>
    <h3 className="text-primary m-3"><FontAwesomeIcon className="text-muted" icon={faWrench}/> Manage Order</h3>
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
          {products.map((product, index) => (
            <ManageTable key={product._id} product={product} index={index}  />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ManageOrder;
