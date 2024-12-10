import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/Navbar/Navbar";
import "../../App.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Punch from "../../components/Punch/Punch";

const Login = () => {
  //输入的用户信息
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  //错误信息
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  //设置用户信息
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //点击登录按钮后使用post方法像后端发送用户信息进行登录验证，成功则跳转至用户代办页面
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      await axios.post("http://localhost:8800/api/auth/login", inputs);
      navigate("/home");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="login_register">
        <h1 style={{ color: "white" }}>Login</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button onClick={handelSubmit}>登录</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <span>
            <Link to="/register">立即注册！</Link>
          </span>
        </form>
      </div>

      <Punch />

      <Card />

      <Footer />
    </div>
  );
};

export default Login;
