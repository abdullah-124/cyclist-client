import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import deleteOrder from "../../Shared/handleDelete/handleDelete"

const ManageTable = ({ product, index }) => {
    const handleStatus = (e) =>{
        // product.status = e.target.value;
        const url = `https://pacific-ridge-36287.herokuapp.com/status/${e.target.value}/${product._id}`
        fetch(url,{
          method: "PUT",
        })
        .then(res=> {
          if(res.status === 200){
            alert("Status Updated")
          }
        })
    }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.coustomer}</td>
      <td>{product.status}</td>
      <td className="text-center">
        <select className="btn" onChange={handleStatus}>
          <option value={product.status} defaultValue>
            {product.status}
          </option>
          <option value="Shiping">Shiping</option>
          <option value="Pending">Pending</option>
          <option value="Reject">Reject</option>
        </select>
        <span className="btn ps-3"><FontAwesomeIcon onClick={()=>deleteOrder(product._id)} icon={faTrashAlt} /></span>
      </td>
    </tr>
  );
};

export default ManageTable;
