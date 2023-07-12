import React from "react";
import "./TimeLine.css";
import { history } from "../../assets";
import { ShowHistory } from "../../components";

const TimeLine = () => {
  return (
    <section className="historySection">
      <div className="container">
        <div className="history_detail flex_container">
          <div className="history_img">
            <img src={history} alt="" />
          </div>
          <div className="history_info">
            <h1 className="heading-font">Leading Beer Brewery, Since 1974!</h1>

            <p className="normal-font">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada
              feugiat. Mauris blandit aliquet elit, eget tincidunt nibh.
            </p>
            <p className="normal-font">
              Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
              dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Proin eget tortor.
            </p>
          </div>
        </div>

        <div className="timeLine">
          <ShowHistory year="1974" />
          <ShowHistory year="1985" />
          <ShowHistory year="2005" />
          <ShowHistory year="2021" />
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
