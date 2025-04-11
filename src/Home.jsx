import React, { useState ,useEffect} from "react";

import "./Home.css";
import ds from "./assets/ds.png";
import logomain from "./assets/logoMain 6.png";
import mobile from "./assets/design.png";
import schola from "./assets/Group 3(1).png";
import microphone from "./assets/microphone.png";
import whatsapp from "./assets/whatsapp.png";
import phone from "./assets/phone.png";
import { FaAnglesRight } from "react-icons/fa6";
import scholalogo from "./assets/schola-logo.png";
import bnilogo from "./assets/bnilogo.png";
import { FaCircle } from "react-icons/fa6";
import "animate.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { getData, sendRec, sendTts, storeData } from "./api/Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [textPopUp, settextPopUp] = useState(false);
  const [voicePopUp, setVoicePopUp] = useState(false);
  const [hisabukPopUp, setHisabukPopUp] = useState(false);
  const [ScholaPopUp, setScholaPopUp] = useState(false);
  const [whatsappPopUp, setWhatsappPopUp] = useState(false);
  const [servicePopup, setServicePopup] = useState(false);
  
  const [phone_number, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const [countdown, setCountdown] = useState(0); //added
  const [countdown2, setCountdown2] = useState(0); //added


  // const showMessage = () => {
  //   return (
  //     <div className="alert alert-success">Sucessfully sented.</div>
  //     );
  // }
  useEffect(() => {
    
    const token = localStorage.getItem("access_token");
    if (token && token !== "undefined") {
      setServicePopup(true);

      const lastTtsSubmit = localStorage.getItem("lastTtsSubmit");
      const lastRecSubmit = localStorage.getItem("lastRecSubmit");
      if (lastTtsSubmit) {
      const now = Date.now();
      const timePassed = now - parseInt(lastTtsSubmit);

      if (timePassed < 60000) {
        const timeLeft = 60000 - timePassed;
        // setError("Please wait 1 minute before trying again.");
        setCountdown(Math.floor(timeLeft / 1000)); //added
        const interval = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              // setError("");
              localStorage.removeItem("lastTtsSubmit");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
          return () => clearInterval(interval);
        }
      }
      if (lastRecSubmit) {
      const now2 = Date.now();
      const timePassed2 = now2 - parseInt(lastRecSubmit);

      if (timePassed2 < 60000) {
        const timeLeft2 = 60000 - timePassed2;
        // setError("Please wait 1 minute before trying again.");
        setCountdown2(Math.floor(timeLeft2 / 1000)); //added
        const interval2 = setInterval(() => {
          setCountdown2((prev) => {
            if (prev <= 1) {
              clearInterval(interval2);
              // setError("");
              localStorage.removeItem("lastRecSubmit");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
          return () => clearInterval(interval2);
        }
      }
    } else {
      setServicePopup(false);
    }
  },[]);

  const showPopup = () => {
    
    setPopupVisible(true);

  };

  const initializeInfo = () => {

    getData().then((res) => {
      console.log("Info " + res.data.data.name);
      setName(res.data.data.name);
      setPhoneNumber(res.data.data.phone_number);
    }).catch((error) => {
      if(error.response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.reload();
      }
    });
  }

  const showPopup2 = () => {
    initializeInfo();
    settextPopUp(true);
    
  };

  const showVoicePopup = () => {
    initializeInfo();
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

  //  firts popup details

  

  const handleFirstSubmit = (event) => {
    event.preventDefault();

    
    //  firts popup details

    const formData= {
      name: event.target.name.value ?? '',
      phone_number: event.target.phone_number.value ?? '',
      business_name: event.target.business_name.value ?? '',
      business_category: event.target.business_category.value ?? '',
      
    }
    
    // console.log('form submited');
    
    // console.log(data);
    // (data);
    storeData(formData).then((response) => {
      // console.log({response});
      // debugger;
      const token  = response.data.access_token;
      localStorage.setItem("access_token", token);
      setServicePopup(true);
    })
    .catch((error) => {
      // console.error('ErrorApi:', error);
      toast.error("Something went wrong, please try again later");
      
    });

  }
  const handleTimertts = () => {
    const lastSubmit = localStorage.getItem("lastTtsSubmit");
    const now = Date.now();

    if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
      const timeLeft = 60000 - (now - parseInt(lastSubmit));
      // setError("Please wait 1 minute before trying again.");
      setCountdown(Math.floor(timeLeft / 1000));
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            // setError("");
            localStorage.removeItem("lastTtsSubmit");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return;
    }

    // Save current time
    localStorage.setItem("lastTtsSubmit", now);
    // setError("");
    setCountdown(0); // reset countdown
  }
  const handleTimerRec = () => {
    const lastSubmit = localStorage.getItem("lastRecSubmit");
    const now = Date.now();

    if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
      const timeLeft = 60000 - (now - parseInt(lastSubmit));
      // setError("Please wait 1 minute before trying again.");
      setCountdown2(Math.floor(timeLeft / 1000));
      const interval = setInterval(() => {
        setCountdown2((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            // setError("");
            localStorage.removeItem("lastRecSubmit");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return;
    }

    // Save current time
    localStorage.setItem("lastRecSubmit", now);
    // setError("");
    setCountdown2(0); // reset countdown
  }

  const handleTts = (event) => {
    event.preventDefault();
    setName("");
    setPhoneNumber("");
    handleTimertts();
    const formData = {
      name: event.target.name.value ?? '',
      phone_number: event.target.phone_number.value ?? '',
      language: event.target.language.value ?? '',
    }
    sendTts(formData).then((response) => {
      // set timer
      closePopup();
      toast.success("Call sent to phone number");
      
    }).catch((error) => {
      if(error.response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.reload();
      }else{
        // alert("Something went wrong, please try again later");
        toast.error("Something went wrong, please try again later");
        closePopup();
      }
    })
    // console.log(formData);
    
  }

  const handleRecVoice = (event) => {
    event.preventDefault();
    // fields set null
    setName("");
    setPhoneNumber("");
    handleTimerRec();
    const formData = {
      phone_number: event.target.phone_number.value ?? '',
    }
    sendRec(formData).then((res) => {
      // set timer
      closePopup();
      toast.success("Call sent to phone number");
    }).catch((error) => {

      if(error.response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.reload();
      }else{

        toast.error("Something went wrong, please try again later");
        closePopup();
      }
    })
  }




  return (
    
    <div className="body">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="dslogo" >
        <img src={ds} alt="" />
        <div className="caption ">
<h4>          A <span style={{color:"#0089CD"}}><b>partner</b>  </span>  in Your  <span style={{color:"#8DC73E"}}> <b> Progress</b> </span>
</h4>
</div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="robot d-sm-none mt-2">
                <img src={bnilogo} alt="" height={230} />
              </div>
            </div>
            <div className="col-md-6 login-container">
              {servicePopup ? (
                <div className="container">
                  <div className="row">
                 
                    <div className="col box" onClick={showPopup}>
                      <h4>WEB DESIGN & DEVELOPMENT</h4>
                      <img src={mobile} alt="" height={30} />
                    </div>
                    <div className="col box" onClick={showPopup2}>
                      <h4>BULK TEXT TO VOICE CALL</h4>
                      <img src={phone} alt="" height={30} />
                    </div>
                    <div className="w-100  "></div>
                    <div className="col box" onClick={showVoicePopup}>
                      <h4>BULK RECORDED VOICE CALL</h4>
                      <img src={microphone} alt="" height={30} />
                    </div>
                    <div className="col box" onClick={showWhatsapp}>
                      <h4>BULK WHATSAPP MESSAGING</h4>
                      <img src={whatsapp}  alt="" height={30} />
                    </div>
                    <div className="w-100  "></div>
                    <div className="col box" onClick={showHisabuk}>
                      <h4>ACCOUNTS MANAGEMENT APPLICATION</h4>
                      <img src={logomain} alt="" height={30} />
                    </div>
                    <div className="col box" onClick={showSchola}>
                      <h4>
                        CAMPUS <br /> MANAGEMENT APPLICATION
                      </h4>
                      <img src={schola} alt="" height={30} />
                    </div>
                    <div className="w-100  "></div>

                    <div className="col box1 ">
                      <a href="https://datastoneglobal.com/">
                        <h4>Our Clients</h4>
                      </a>
                    </div>

                    <div className="col box1 ">
                      <a href="https://datastoneglobal.com/portfolio.php">
                        <h4>Portfolio</h4>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="box2">
                  <form action="" className="form1" onSubmit={handleFirstSubmit}>
                    <div className="input-box">
                      <h2>Welcome to the exhibition! </h2>
                      <input type="text" name="name" placeholder=" " required />
                      <span>Name</span>
                      <i></i>
                    </div>
                    <div className="input-box">
                      <input type="number" name="phone_number" minLength={10} maxLength={10} placeholder=" " required/>
                      <span>Mobile No:</span>
                      <i></i>
                    </div>
                    <div className="input-box">
                      <input type="text" name="business_name" placeholder=" " required />
                      <span>Company Name</span>
                      <i></i>
                    </div>
                    <div className="input-box">
                      <input type="text" name="business_category" placeholder=" " />
                      <span>Business Category</span>
                      <i></i>
                    </div>
                    <input
                      type="submit"
                      value="Submit"
                    />
                    {/* <div className="links">
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
                  <FaAnglesRight style={{ marginRight: "8px" }} />E-commerce
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
                      <form className="form-inline" onSubmit={handleTts}>
                        <div className="form-group">
                          <label className="sr-only" for="name" >
                            Name
                          </label>
                          <input type="text" defaultValue={name} className="form-control" name="name" />
                        </div>
                        <div className="form-group">
                          <label className="sr-only" for="pwd">
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={phone_number}
                            name="phone_number"
                            minLength={10}
                            maxLength={10}
                            pattern="[0-9]{10}"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label for="language">Choose Language</label>
                          <select
                            className="form-control"
                            id="language"
                            name="language"
                            required
                          >
                            <option value="">Select Language</option>
                            <option value="en-IN-Wavenet-D">English</option>
                            <option value="ml-IN-Wavenet-C">Malayalam</option>
                            <option value="ar-XA-Wavenet-D">Arabic</option>
                          </select>
                        </div>

                        <button disabled={countdown > 0} type="submit" className="btn btn-default">
                          Call Now
                        </button>
                        <div>
      {/* <button onClick={() => {toast.success("Call sented to phone number", { position: "top-right" });}}>Notify</button>
      <ToastContainer /> */}
    </div>
                      </form>
                      {countdown > 0 && (
                        <p style={{ color: "orange", marginTop: "5px" }}>
                          You can try again in {countdown} second
                          {countdown !== 1 ? "s" : ""}.
                        </p>
                      )}
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
                    <h1>Try our recorded to call service</h1>
                    <div className="">
                      <form className="form-inline" onSubmit={handleRecVoice}>
                        <div className="form-group">
                          <label className="sr-only" for="name">
                            Name
                          </label>
                          <input type="text" name="name" defaultValue={name} className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label className="sr-only" for="number">
                            Mobile Number
                          </label>
                          <input
                            type="number"
                            defaultValue={phone_number}
                            name="phone_number"
                            minLength={10}
                            maxLength={10}
                            className="form-control"
                            id="number"
                          />
                        </div>

                        <button disabled={countdown2 > 0} type="submit" className="btn btn-default">
                          Call Now
                        </button>
                      </form>
                      {countdown2 > 0 && (
                        <p style={{ color: "orange", marginTop: "5px" }}>
                          You can try again in {countdown2} second
                          {countdown2 !== 1 ? "s" : ""}.
                        </p>
                      )}
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
      className="float"
      target="_blank"
    >
    {/* <i className="fa-brands fa-whatsapp my-float"></i> */}
    <i className="fa-brands fa-whatsapp my-float"><FaWhatsapp className="call-icon"/></i>
    
    </a> 
 
    <a
       href="tel:+919747194333"
      className="float2"
      target="_blank"
    >
 
    <i className="fa-brands fa-whatsapp my-float"><FaPhoneFlip className="call-icon"/></i>
    
    </a> 
      {/* <div className="whats-float">
        <a href="https://wa.me/+919747194333" target="_blank">
          {" "}
          <i className="fa-brands fa-whatsapp"> <FaWhatsapp /></i>
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
