import React, { useState } from "react";
import "./Home.css";
import ds from "./assets/ds.png";
import robot from "./assets/Group 6.png";
import logomain from "./assets/logoMain 6.png";
import mobile from "./assets/design.png";
import schola from "./assets/Group 3(1).png";
import microphone from "./assets/microphone.png";
import whatsapp from "./assets/whatsapp.png";
import phone from "./assets/phone.png";
import { FaAnglesRight } from "react-icons/fa6";
import scholalogo from "./assets/schola-logo.png";
import { FaCircle } from "react-icons/fa6";
import "animate.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";


const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [textPopUp, settextPopUp] = useState(false);
  const [voicePopUp, setVoicePopUp] = useState(false);
  const [hisabukPopUp, setHisabukPopUp] = useState(false);
  const [ScholaPopUp, setScholaPopUp] = useState(false);
  const [whatsappPopUp, setWhatsappPopUp] = useState(false);
  const [servicePopup, setServicePopup] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const showPopup2 = () => {
    settextPopUp(true);
  };

  const showVoicePopup = () => {
    setVoicePopUp(true);
  };

  const showHisabuk = () => {
    setHisabukPopUp(true);
  };

  const showSchola = () => {
    setScholaPopUp(true);
  };

  const showWhatsapp = () => {
    setWhatsappPopUp(true);
  };

  // const showService = () => {
  //   setServicePopup(true);
  // }

  // Function to hide the popup
  const closePopup = () => {
    setPopupVisible(false);
    settextPopUp(false);
    setVoicePopUp(false);
    setHisabukPopUp(false);
    setScholaPopUp(false);
    setWhatsappPopUp(false);
  };

  return (
    <div className="body">
      <div className="dslogo" >
        <img src={ds} alt="" />
      </div>

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="robot d-md-none">
                <img src={robot} alt="" height={230} />
              </div>
            </div>
            <div className="col-md-6 login-container">
              {servicePopup ? (
                <div class="container">
                  <div class="row">
                 
                    <div class="col box" onClick={showPopup}>
                      <h4>WEB DESIGN & DEVELOPMENT</h4>
                      <img src={mobile} alt="" height={30} />
                    </div>
                    <div class="col box" onClick={showPopup2}>
                      <h4>BULK TEXT TO VOICE CALL</h4>
                      <img src={phone} alt="" height={30} />
                    </div>
                    <div class="w-100  "></div>
                    <div class="col box" onClick={showVoicePopup}>
                      <h4>BULK RECORDED VOICE CALL</h4>
                      <img src={microphone} alt="" height={30} />
                    </div>
                    <div class="col box" onClick={showWhatsapp}>
                      <h4>BULK WHATSAPP MESSAGING</h4>
                      <img src={whatsapp}  alt="" height={30} />
                    </div>
                    <div class="w-100  "></div>
                    <div class="col box" onClick={showHisabuk}>
                      <h4>ACCOUNTS MANAGEMENT APPLICATION</h4>
                      <img src={logomain} alt="" height={30} />
                    </div>
                    <div class="col box" onClick={showSchola}>
                      <h4>
                        CAMPUS <br /> MANAGEMENT APPLICATION
                      </h4>
                      <img src={schola} alt="" height={30} />
                    </div>
                    <div class="w-100  "></div>

                    <div class="col box1 ">
                      <a href="https://datastoneglobal.com/">
                        <h4>Our Clients</h4>
                      </a>
                    </div>

                    <div class="col box1 ">
                      <a href="https://datastoneglobal.com/portfolio.php">
                        <h4>Portfolio</h4>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="box2">
                  <form action="" className="form1">
                    <div class="input-box">
                      <h2>Welcome to the exhibition! </h2>
                      <input type="text" required />
                      <span>Name</span>
                      <i></i>
                    </div>
                    <div class="input-box">
                      <input type="number" required />
                      <span>Mobile No</span>
                      <i></i>
                    </div>
                    <div class="input-box">
                      <input type="text" required />
                      <span>Company Name</span>
                      <i></i>
                    </div>
                    <input
                      type="submit"
                      value="Connect"
                      onClick={() => setServicePopup(true)}
                    />
                    {/* <div class="links">
                <a href="#">Forgot Password?</a>
                <a href="#">Sign Up</a>
            </div> */}
                  </form>
                </div>
              )}
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
            <div className="popup-website">
              <h1>WEB DESIGN & DEVELOPMENT</h1>
              <div className="website-content">
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
        <div className="popup text-banner">
          <div className=" msg-banner">
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>

            <div className="container">
              <div className="row  message-text">
                <div className="col-md-6 ">
                  <h1 className="animate__animated animate__fadeInLeft">
                    AI INTEGRATED TEXT TO VOICE CALL
                  </h1>
                  <div className="msg-inner" style={{ fontSize: "14px" }}>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Send text to Personalised voice call
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      cost effective
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Personalized calls
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Multilingual
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      24/7 Customer Service
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-box">
                    <h1>Try our text to voice call service</h1>
                    <div className="">
                      <form class="form-inline" action="/action_page.php">
                        <div class="form-group">
                          <label class="sr-only" for="email">
                            Name
                          </label>
                          <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                          <label class="sr-only" for="pwd">
                            Mobile Number
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="pwd"
                          />
                        </div>
                        <div class="form-group">
                          <label for="language">Choose Language</label>
                          <select
                            class="form-control"
                            id="language"
                            name="language"
                          >
                            <option value="">Select Language</option>
                            <option value="en">English</option>
                            <option value="es">malayalam</option>
                            <option value="fr">arabic</option>
                          </select>
                        </div>

                        <button type="submit" class="btn btn-default">
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {voicePopUp && (
        <div className="popup  voice-popup">
          <div className=" msg-banner">
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>
            <div className="container">
              <div className="row  message-text">
                <div className="col-md-6 ">
                  <h1 className="animate__animated animate__fadeInLeft">
                    RECORDED VOICE CALL
                  </h1>
                  <div className="msg-inner">
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Webbased Bulk Voice call
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Automation
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} /> Pre
                      recorded voice call
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} /> Dedicated
                      Number for outgoing calls
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Call Delivery reports
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FaAnglesRight style={{ marginRight: "8px" }} /> Cost
                      Effective
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-box">
                    <h1>Try our text to voice call service</h1>
                    <div className="">
                      <form class="form-inline" action="/action_page.php">
                        <div class="form-group">
                          <label class="sr-only" for="email">
                            Name
                          </label>
                          <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                          <label class="sr-only" for="pwd">
                            Mobile NUmber
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="number"
                          />
                        </div>

                        <button type="submit" class="btn btn-default">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {hisabukPopUp && (
        <div className="popup msg-banner2 hisabuk-popup">
          <div className=" ">
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>
            <div className="container hisabuk-banner ">
              <img src={logomain} alt="" />

              <h1> ONLINE SALES FORCE AUTOMATION SOFTWARE</h1>
              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                Accounts Management
              </h3>

              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                Payroll Management
              </h3>

              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                QR Code Embedded Invoice
              </h3>
              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                Access anytime anywhere
              </h3>

              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                Customer Management
              </h3>

              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                Stock Management
              </h3>

              <h3
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.2s" }}
              >
                <FaAnglesRight
                  style={{ marginRight: "8px", color: "#06299d" }}
                />
                Mobile Access.
              </h3>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      )}

      {ScholaPopUp && (
        <div className="popup msg-banner1 schola-popup">
          <div className="popup-content3 ">
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
            <div className="schola-banner">
              <img src={scholalogo} alt="" height={100} />
              <h4 style={{ marginBottom: "70px", color: "	#13aba6" }}>
                Campus Management Software
              </h4>
              <div className="schola-content">
                <h3
                  className="animate__animated animate__fadeInLeft"
                  style={{ animationDelay: "0.2s" }}
                >
                  {" "}
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Online end to end Campus Management
                </h3>
                <h3
                  className="animate__animated animate__fadeInLeft"
                  style={{ animationDelay: "0.2s" }}
                >
                  <FaAnglesRight style={{ marginRight: "8px" }} />
                  Comprehensive ERP software
                </h3>

                <div className="row">
                  <div className="col-md-6 animate__animated animate__fadeInUp">
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Student Managment
                    </h4>
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Fees
                    </h4>
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Finance
                    </h4>
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Mobile Apps
                    </h4>
                  </div>
                  <div className="col-md-6  animate__animated animate__fadeInUp">
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Transportation
                    </h4>
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Examination
                    </h4>
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Attendance
                    </h4>
                    <h4>
                      <FaCircle
                        style={{ marginRight: "14px", fontSize: "15px" }}
                      />
                      Store
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {whatsappPopUp && (
        <div className="popup whatsapp-popup">
          <div className="msg-banner">
            <span
              className="popup-close"
              style={{ cursor: "pointer" }}
              onClick={closePopup}
            >
              &times;
            </span>

            <div className="container whatsapp-banner ">
              <div className="row ">
                <h1>BULK WHATSAPP MESSAGING</h1>
                <div className="col-md-6 whatsapp-box">
                  <div style={{ textAlign: "left" }}>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Instant Reach to thousands of customers instantly.
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Personalized Messaging
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Marketing & Promotions
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Boost Business Growth
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInLeft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Easy to use
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 whatsapp-box">
                  <div style={{ textAlign: "left" }}>
                    <h3
                      className="animate__animated animate__fadeInRight"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      WhatsApp Cloud Messaging
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInRight"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Bulk Group Messaging
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInRight"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Scheduled Sending
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInRight"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Notifications & Alerts
                    </h3>
                    <h3
                      className="animate__animated animate__fadeInRight"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {" "}
                      <FaAnglesRight style={{ marginRight: "8px" }} />
                      Save Time
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

<a
     
      href="https://api.whatsapp.com/send?phone=+919747194333"
      class="float"
      target="_blank"
    >
    {/* <i class="fa-brands fa-whatsapp my-float"></i> */}
    <i className="fa-brands fa-whatsapp my-float"><FaWhatsapp className="call-icon"/></i>
    
    </a> 
 
    <a
       href="https://www.datastoneglobal.com/"
      class="float2"
      target="_blank"
    >
 
    <i className="fa-brands fa-whatsapp my-float"><FaPhoneFlip className="call-icon"/></i>
    
    </a> 
      {/* <div class="whats-float">
        <a href="https://wa.me/+919747194333" target="_blank">
          {" "}
          <i class="fa-brands fa-whatsapp"> <FaWhatsapp /></i>
          <span>
            WhatsApp <br />
            <small>+ 91 9747 194 333</small>
          </span>{" "}
        </a>
      </div> */}
    </div>
  );
};

export default Home;
