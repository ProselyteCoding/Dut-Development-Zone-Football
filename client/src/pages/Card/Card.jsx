import "../../App.scss";
import Footer from "../../../src/components/Footer/Footer";
import Navbar from "../../../src/components/Navbar/Navbar";
import Sidebar from "../../../src/components/Sidebar/Sidebar";
import CardBar from "./CardBar/CardBar.jsx";

const Card = () => {
  return (
    <div>
      <div className="card">
        <Navbar />
        <Sidebar />
        <CardBar />
        <Footer />
      </div>
    </div>
  )
}

export default Card
