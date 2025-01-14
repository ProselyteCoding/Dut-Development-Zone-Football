import React from "react";
import "./NewsPF.scss";
import news1 from "../../../assets/images/news1.jpg";
import news2 from "../../../assets/images/news2.jpg";
import news3 from "../../../assets/images/news3.jpg";

const NewsPF = () => {
  return (
    <div className="newspf-container">
      <div className="news-card-container">
        <div className="news-card-item">
          <div className="news-card-f">
            <img src={news1} alt="news1"></img>
            <div className="img-blur"></div>
            <div className="content-f">news1</div>
          </div>
          <div className="news-card-b">
            <div className="content-b">
              <div className="content-b-title">news1</div>
              <div className="content-b-text">news1</div>
            </div>
          </div>
        </div>

        <div className="news-card-item">
          <div className="news-card-f">
            <img src={news2} alt="news2"></img>
            <div className="img-blur"></div>
            <div className="content-f">news2</div>
          </div>
          <div className="news-card-b">
            <div className="content-b">
              <div className="content-b-title">news2</div>
              <div className="content-b-text">news2</div>
            </div>
          </div>
        </div>

        <div className="news-card-item">
          <div className="news-card-f">
            <img src={news3} alt="news3"></img>
            <div className="img-blur"></div>
            <div className="content-f">news3</div>
          </div>
          <div className="news-card-b">
            <div className="content-b">
              <div className="content-b-title">news3</div>
              <div className="content-b-text">news3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-content-container">
        <div className="content-text">获取更多新闻资讯</div>
        <button className="content-btn">立即查看</button>
      </div>
    </div>
  );
};

export default NewsPF;
