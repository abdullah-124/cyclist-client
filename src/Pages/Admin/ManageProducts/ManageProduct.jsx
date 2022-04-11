import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loader from "../../Shared/Loader/Loader";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   product delete
  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:4000/deleteProduct/${id}`;
    const proceed = window.confirm("Are you sure you want to Delate ");
    if (proceed) {
      console.log("okey");
      fetch(url, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 200) {
          alert("Product Removed");
        }
      });
    }
  };
  return products.length === 0 ? (
    <Loader />
  ) : (
    <>
      <h3 className="text-primary m-3">Total {products.length} Products</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  width={90}
                  className="img-fluid"
                  src={product.image}
                  alt=""
                />
              </td>
              <td>{product.name}</td>
              <td className="fw-bold fs-4">${product.price}</td>
              <td
                onClick={() => handleDelete(product._id)}
                className="text-center "
              >
                <FontAwesomeIcon className="btn-main" icon={faDeleteLeft} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ManageProduct;
