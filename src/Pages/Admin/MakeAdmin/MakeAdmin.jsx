import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth"

const MakeAdmin = () => {
  const {user} = useAuth()
  const name = useRef();
  const [email, setEmail] = useState({});
  const makeAdmin = (e) => {
    console.log(name.current.value)
    setEmail(name.current.value);
    fetch(`https://pacific-ridge-36287.herokuapp.com/makeAdmin/${user.email}/${email}`, {
      method: "PUT",
    })
    .then(res => console.log(res))
    e.preventDefault();
  };
  return (
    <div className="p-5 rounded-3 shadow-lg col-lg-7 mt-5 mx-auto col-12">
      <form onSubmit={makeAdmin}>
        <div>
          <Form.Control ref={name} type="email" placeholder="Enter email" />
        </div>
        <button className="btn-main mt-4" type="submit">
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
