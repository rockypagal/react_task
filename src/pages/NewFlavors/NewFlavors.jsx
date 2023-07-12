import React from "react";
import "./NewFlavors.css";
import { orangeRound, blackRound } from "../../assets";

const NewFlavors = () => {
  return (
    <section className="FlavorSection">
      <div className="container">
        <div className="flavor_heading">
          <h1 className="heading-font">
            <span>Discover Our</span> New Flavors
          </h1>

          <p className="normal-font">
            <span>
              Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
              Donec
            </span>{" "}
            sollici tudin molestie malesuada.
          </p>
        </div>

        <div className="flavor_gallery">
          <div className="new_flavor">
            <div className="image">
              <img src={orangeRound} />
            </div>

            <div className="flavor_info">
              <h5 className="heading-font">Biergut</h5>

              <h1 className="heading-font">Premium Light</h1>
              <p className="normal-font">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Donec sollicitudin molestie malesuada. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
                molestie malesuada.
              </p>

              <div className="beer_stats">
                <div className="extract">
                  <p className="heading-font">Extract</p>
                  <p className="normal-font">11%</p>
                </div>
                <div className="Alcohol">
                  <p className="heading-font">Alcohol</p>
                  <p className="normal-font">4%</p>
                </div>
                <div className="Gentain">
                  <p className="heading-font">Gentain</p>
                  <p className="normal-font">20IBU</p>
                </div>
                <div className="Serving">
                  <p className="heading-font">Serving Temp</p>
                  <p className="normal-font">6-9 Degree Celsius</p>
                </div>
              </div>
            </div>
          </div>
          <div className="new_flavor reverse">
            <div className="image">
              <img src={blackRound} />
            </div>

            <div className="flavor_info">
              <h5 className="heading-font">Biergut</h5>

              <h1 className="heading-font">Premium Light</h1>
              <p className="normal-font">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Donec sollicitudin molestie malesuada. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
                molestie malesuada.
              </p>

              <div className="beer_stats">
                <div className="extract">
                  <p className="heading-font">Extract</p>
                  <p className="normal-font">11%</p>
                </div>
                <div className="Alcohol">
                  <p className="heading-font">Alcohol</p>
                  <p className="normal-font">4%</p>
                </div>
                <div className="Gentain">
                  <p className="heading-font">Gentain</p>
                  <p className="normal-font">20IBU</p>
                </div>
                <div className="Serving">
                  <p className="heading-font">Serving Temp</p>
                  <p className="normal-font">6-9 Degree Celsius</p>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
};

export default NewFlavors;
