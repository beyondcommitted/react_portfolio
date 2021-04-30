import React from "react";

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img
          src="https://c.pxhere.com/photos/a5/9f/code_coder_coding_computer_data_developer_developing_development-918274.jpg!d"
          alt=""
        />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Beyond Committed</span>
        </h4>
        <p className="about-me">
          I am eager to impact more lives. Day by day, I am seeking knowledge to
          grow my technology based skill set to do just that. I have many ideas
          and believe I have the interest and intellect to exceed my
          aspirations. My dedication and work ethic are relentless. I have a
          level of discipline that drives me even when I am not motivated.
        </p>
        <div className="about-details">
          <div className="personal-details">
            <p>Full Name: <span>Breon Sparrow</span></p>
          </div>
          <div className="personal-details">
            <p>Age: <span>31</span></p>
          </div>
          <div className="personal-details">
            <p>Languages: <span>American English</span></p>
          </div>
          <div className="personal-details">
            <p>Address: <span>13015 W Ranch Santa Fe Blvd
                Avondale, AZ, 85392, USA</span></p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}
