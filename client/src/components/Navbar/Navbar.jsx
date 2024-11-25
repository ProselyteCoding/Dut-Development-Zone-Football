import React, { useContext } from "react";
import "../../App.css";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

//导航栏组件
const Navbar = () => {
  //当前用户和退出函数
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="head">ToDoList</div>
      <div className="container">
        {/*已登录时显示当前用户名，否则为None*/}
        {currentUser ? (
          <span className="current_user">{currentUser?.username}</span>
        ) : (
          <span className="none_user">None</span>
        )}
        {/*已登录时显示退出链接，否则显示登录链接*/}
        {currentUser ? (
          <span className="login_logout" onClick={logout}>
            <Link className="link" to="/">
              Logout
            </Link>
          </span>
        ) : (
          <span className="login_logout">
            <Link className="link" to="/login">
              Login
            </Link>
          </span>
        )}
      </div>
      <hr></hr>
    </div>
  );
};

export default Navbar;
