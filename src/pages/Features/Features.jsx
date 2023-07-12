import React from "react";
import { three1, three2 } from "../../assets/index";
import { LiaBeerSolid } from "react-icons/lia";
import { CiWheat } from "react-icons/ci";
import { TbSeeding } from "react-icons/tb";
import { BiDroplet } from "react-icons/bi";
import { GiWheat } from "react-icons/gi";
import { GiBeerBottle } from "react-icons/gi";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features_heading">
          <h1 className="heading-font">
            <span>Features &</span>
            Ingredients
          </h1>
          <p className="normal-font">
            <span>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Donec
            </span>
            sollicitudin molestie malesuada.
          </p>
        </div>

        <div className="features_info">
          <div className="features_img">
            <img src={three1} alt="" />
          </div>
          <div className="features_detail normal-font">
            <div>
              <span>
                <LiaBeerSolid />
              </span>
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin eget tortor risus. Nulla quis lorem ut libero
                malesuada feugiat. Mauris blandit aliquet elit.
              </p>
            </div>
            <div>
              <span>
                <CiWheat />
              </span>
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin eget tortor risus. Nulla quis lorem ut libero
                malesuada feugiat. Mauris blandit aliquet elit.
              </p>
            </div>
            <div>
              <span>
                <TbSeeding />
              </span>
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin eget tortor risus. Nulla quis lorem ut libero
                malesuada feugiat. Mauris blandit aliquet elit.
              </p>
            </div>
          </div>
        </div>

        <div className="extra_features normal-font">
          <div>
            <span>
              <BiDroplet />
            </span>
            <p> Vestibulum ac diam sit amet quam vehicula elementum .</p>
          </div>
          <div>
            <span>
              <GiWheat />
            </span>
            <p> Vestibulum ac diam sit amet quam vehicula elementum .</p>
          </div>
          <div>
            <span>
              <GiBeerBottle />
            </span>
            <p> Vestibulum ac diam sit amet quam vehicula elementum .</p>
          </div>
        </div>

        <div className="history_detail  flex_container feature_last">
          <div className="history_img">
            <img src={three2} alt="" />
          </div>
          <div className="history_info">
            <h1 className="heading-font">Choose Your Flavour</h1>

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

            <div className="features_btn ">
              <button>Choose For Yourself</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
