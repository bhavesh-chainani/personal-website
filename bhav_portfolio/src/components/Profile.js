import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section_pic_container">
        <img src="./assets/profile.png" alt="Bhavesh Chainani Profile Picture" className="profile_pic" />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title_1">Bhavesh Chainani</h1>
        <p className="section_text_p2">
          <span className="nowrap">Data Scientist</span> | <span className="nowrap">Aspiring Tech Consultant</span>
        </p>
        <div className="btn_container">
          <a href="#contact" className="btn_color">Contact Info</a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
