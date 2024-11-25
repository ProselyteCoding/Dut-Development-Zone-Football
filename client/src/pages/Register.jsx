import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Register = () => {
  //输入的用户信息
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  //错误信息
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //设置用户信息
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //点击注册按钮后使用post方法像后端发送用户信息，将其写入数据库，成功则跳转至登录页面
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="login_register">
        <h1 style={{color:"white"}}>Register</h1>
        <form>
          <input
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <input required type="password" placeholder="confirmed password" />
          <button onClick={handelSubmit}>Register</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <span>
            <Link to="/">Login the account.</Link>
          </span>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
