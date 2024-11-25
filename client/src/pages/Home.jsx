import { useContext, useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Sidebar from "../components/Sidebar/Sidebar";

//主页面，也是未登录的代办操作页面
function Home() {
  //代办信息数组，当前用户
  const [listData, setListData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    //登陆后从后端使用get方法获取该用户的全部代办信息更新到listData数组中
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/todos/get", {
          params: {
            uid: currentUser.id,
          },
        });
        setListData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentUser.id]);

  return (
    <div>
      <div className="App">
        <Navbar/>
        <Sidebar />
        <div className="workspace">
        </div>
      </div>
      <Footer />
      <div>123</div>
    </div>
  );
}

export default Home;
