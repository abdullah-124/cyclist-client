import React from "react";
import bicycle from "./bicycle.svg";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4 mt-4">
      <div className="container mx-auto">
        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
          <div className="col">
            <img className="img-fluid w-50" src={bicycle} alt="" />
          </div>
          <div className="col">
            <form>
              <div>
                <label className="">Have any questions ?</label>
                <br />
                <input
                  className="p-1"
                  type="text"
                  placeholder="Enter Your Massage"
                />
                <button className="mx-2 btn btn-light text-right">Send</button>
              </div>
            </form>
            <div className="mt-4">
                
                <h6>Important Link</h6>
                <Link className="text-light" to="/home">Home</Link>
                <Link className="text-light" to="/products">Products</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
