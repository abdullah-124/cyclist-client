import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products/Products";
import Register from "./Pages/Register/Register/Register";
import Login from "./Pages/Register/Login/Login";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ProductInfo from "./Pages/Products/ProductInfo/ProductInfo";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import ManageOrder from "./Pages/Admin/ManageOrder/ManageOrder";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import AddReview from "./Pages/Reviews/AddReviews";
import MakeAdmin from "./Pages/Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Admin/AdminRoute/AdminRoute";
import AuthProvider from "./Hooks/AuthProvider/AuthProvider";
import ManageProduct from "./Pages/Admin/ManageProducts/ManageProduct"
import Header from "./Pages/Header/Header"
import NotFound from "./Pages/Shared/NotFound/NotFound"
import CheackOut from "./Pages/Dashboard/CheackOut/CheackOut"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/" element={<PrivateRoute />}>
              <Route path="dashboard/" element={<Dashboard />}>
                <Route path="" element={<MyOrder />} />
                <Route path="cheackOut" element={<CheackOut />} />
                <Route path="review" element={<AddReview />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="dashboard/*" element={<Dashboard />}>
                <Route path="admin/*" element={<AdminRoute />}>
                  <Route path="manageOrder" element={<ManageOrder />} />
                  <Route path="manageProduct" element={<ManageProduct />} />
                  <Route path="addProduct" element={<AddProduct />} />
                  <Route path="makeAdmin" element={<MakeAdmin />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
