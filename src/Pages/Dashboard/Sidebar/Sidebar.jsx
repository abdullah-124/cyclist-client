import {
  faAdd,
  faGift,
  faHammer,
  faMeteor,
  faServer,
  faSignOutAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "../dashboard.css";

const Sidebar = () => {
  const { user, logout, admin } = useAuth();
  // console.log(admin);
  let logo = "";
  if (user?.displayName) {
    logo = user?.displayName[0];
  }

  return (
    <div className="sidebar scrol p-o">
      <div className="user text-center">
        <div className="logo">
          {user.photoURL ? (
            <img className="user-img" src={user.photoURL} alt="user" />
          ) : (
            <div>
              <span className="user-logo">{logo}</span>
            </div>
          )}
        </div>
        <h6 className="mt-2 p-0">{user?.displayName}</h6>
        <small >{user?.email}</small>
        <hr />
      </div>
      {/* Link */}
      <div className="link">
        <Link to="">
          <FontAwesomeIcon icon={faMeteor} />
          <span className="mx-2 side-text"> My Order</span>
        </Link>
        {admin && (
          <div className="admin">
            <Link to="admin/manageOrder">
              <FontAwesomeIcon icon={faWrench} />
              <span className="mx-2 side-text"> Manage Order</span>
            </Link>
            <Link to="admin/manageProduct">
              <FontAwesomeIcon icon={faServer} />
              <span className="mx-2 side-text"> Manage Product</span>
            </Link>
            <Link to="admin/addProduct">
              <FontAwesomeIcon icon={faAdd} />
              <span className="mx-2 side-text"> Add Product</span>
            </Link>
            <Link to="admin/makeAdmin">
              <FontAwesomeIcon icon={faHammer} />
              <span className="mx-2 side-text"> Make Admin</span>
            </Link>
          </div>
        )}
        <Link to="review">
          <FontAwesomeIcon icon={faGift} />
          <span className="mx-2 side-text"> Review</span>
        </Link>
        <Link to="" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          <span className="side-text mx-2">SignOut</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
