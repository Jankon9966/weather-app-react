import React from "react";
import sun from "../assets/images/sun.png";
import humidity from "../assets/images/humidity.png";
import wind from "../assets/images/wind.png";

const Weather = () => {
  return (
    <div className="container">
      <div className="header">
        <form className="search_form">
          <input type="text" name="search" placeholder="Enter a city" />
          <button className="search_btn">Search</button>
        </form>
      </div>
      <div className="weather_content">
        <div className="weather_top">
          <div className="left_side">
            <img src={sun} alt="weather" />
          </div>
          <div className="right_side">
            <h1 className="temperature">1°C</h1>
            <h2 className="city_name">Belgrade</h2>
          </div>
        </div>

        <div className="weather_bottom">
          <div className="pre_forecast">
            <div className="humidity">
              <img src={humidity} alt="humidity" />
              <div className="desc">
                <p>90%</p>
                <h4>Humidity</h4>
              </div>
            </div>
            <div className="wind_speed">
              <img src={wind} alt="wind" />
              <div className="desc">
                <p>2.45 km/h</p>
                <h4>Wind speed</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
