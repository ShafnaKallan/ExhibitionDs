import React, { useState } from "react";
import "./Home.css";
import ds from "./assets/ds.png";
import robot from "./assets/robot.png";
import logomain from "./assets/logoMain 6.png";
import mobile from "./assets/design.png";
import schola from "./assets/Group 3(1).png";
import microphone from "./assets/microphone.png";
import whatsapp from "./assets/whatsapp.png";
import phone from "./assets/phone.png";
import { FaAnglesRight } from "react-icons/fa6";
import "animate.css";

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [textPopUp, settextPopUp] = useState(false);
  const [voicePopUp, setVoicePopUp] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };
  const showPopup2 = () => {
    settextPopUp(true);
  };

  const showVoicePopup = () => {
    setVoicePopUp(true);
  };
  // Function to hide the popup
  const closePopup = () => {
    setPopupVisible(false);
    settextPopUp(false);
    setVoicePopUp(false);
  };

  return (
    <div className="body">
      <div className="dslogo">
        <img src={ds} alt="" />
      </div>
      <div className="banner">
        <div className="container banner-container">
          <div className="row ">
            <div className="col-md-6">
              <div className="robot d-md-none">
                <img src={robot} alt="" height={400} />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="service">OUR SERVICES</h3>
              <div class="grid">
                <div class="box " id="popupLink" onClick={showPopup}>
                  <h4>WEB DESIGN & DEVELOPMENT</h4>

                  <img src={mobile} alt="" height={40} />
                </div>
                <div class="box" onClick={showPopup2}>
                  <h4>BULK TEXT TO VOICE CALL</h4>
                  <img src={phone} alt="" height={40} />
                </div>
                <div class="box" >
                  <h4>BULK WHATSAPP MESSAGING</h4>
                  <img src={whatsapp} alt="" height={40} />
                </div>
                <div class="box" onClick={showVoicePopup}>
                  <h4>BULK RECORDED VOICE CALL</h4>
                  <img src={microphone} alt="" height={40} />
                </div>
                <div class="box">
                  <h4>ACCOUNTS MANAGEMENT APPLICATION</h4>
                  <img src={logomain} alt="" height={40} />
                </div>
                <div class="box">
                  <h4>
                    CAMPUS <br /> MANAGEMENT APPLICATION
                  </h4>
                  <img src={schola} alt="" height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>

            <div className="popup-inner">
              <div className="animate__animated animate__fadeInRight">
                <h2 textAlign="center">WEB DESIGN & DEVELOPMENT</h2>
              </div>
              <div>
                <h4 className="animate__animated animate__fadeInUp ">
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Static & Dynamic Website
                </h4>
                <h4
                  className="animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Mobile Friendly Resposive Design
                </h4>
                <h4
                  className="animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.3s" }}
                >
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Domian & Hosting
                </h4>
                <h4
                  className="animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.4s" }}
                >
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />E commerce
                  Website
                </h4>
                <h4
                  className="animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.5s" }}
                >
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Google my Business Listing
                </h4>
                <h4
                  className="animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.6s" }}
                >
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Web Application Development
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}

      {textPopUp && (
        <div className="popup">
          <div className="popup-content1">
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>
            {/* <div className=""></div> */}
            <div className="text-inner">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 " style={{ textAlign: "left" }}>
                    <h1 className="animate__animated animate__fadeInLeft" style={{ marginBottom: "70px" }}>TEXT TO VOICE CALL</h1>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      Send text to Personalised voice call
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      cost effective
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      Personalized calls
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      Multilingual
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      24/7 Customer Service
                    </h3>
                  </div>
                  <div className="col-md-6 box-2">
                    <div class="overlay">
                      <div class="login">
                        <h1>Try our text to voice call service</h1>
                        <form className="login-form">
                          {/* <input type="email" id="email" name="email" placeholder="Email" /> */}
                          <div
                            style={{
                              backgroundColor: "white",
                              textAlign: "justify",
                              color: "black",
                              padding: "10px",
                              borderRadius: "10px",
                              marginTop: "1rem",
                            }}
                          >
                            <p>
                              To make your experience even better, we’ve
                              introduced a Text-to-Voice Call feature!
                            </p>
                          </div>

                          <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="pls enter your mobile number"
                          />

                          <button className="button" type="button">
                            SEND
                          </button>


                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{voicePopUp && (
        <div className="popup">
          <div className="popup-content1 banner2" >
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>
            {/* <div className=""></div> */}
            <div className="text-inner">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 " style={{ textAlign: "left" }}>
                    <h1 style={{ marginBottom: "70px" }}>RECORDED VOICE CALL</h1>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    > <FaAnglesRight style={{ marginRight: "8px" }} />
                     Webbased Bulk Voice call
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />Automation
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                     <FaAnglesRight style={{ marginRight: "8px" }} /> Pre recorded voice call
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                     <FaAnglesRight style={{ marginRight: "8px" }} /> Dedicated Number for outgoing calls
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />Call Delivery reports
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                     <FaAnglesRight style={{ marginRight: "8px" }} /> Cost Effective
                    </h3>
                  </div>
                  <div className="col-md-6 box-2">
                    <div class="overlay">
                      <div class="login">
                        <h1>Try our Recorded Voice call Service</h1>
                        <form className="login-form">
                          {/* <input type="email" id="email" name="email" placeholder="Email" /> */}
                          <div
                            style={{
                              backgroundColor: "white",
                              textAlign: "justify",
                              color: "black",
                              padding: "10px",
                              borderRadius: "10px",
                              marginTop: "1rem",
                            }}
                          >
                            <p>
                             Send this Voice Call to someone
                            </p>
                          </div>

                          <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="pls enter your mobile number"
                          />

                          <button className="button" type="button">
                            SEND
                          </button>


                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
