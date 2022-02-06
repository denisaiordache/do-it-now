import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

function WelcomePage() {
  return (
    <div>
      <div class="row">
        <div class="col s4">
          <div class="card">
            <div class="card-image">
              <img src="images/doIt.png" style={{ height: "339px" }} />
            </div>
            <div class="card-content">
              <p>
                Task management is the link between planning to do something and
                getting it done.
              </p>
            </div>
          </div>
        </div>

        <div class="col s4">
          <div class="card">
            <div class="card-image">
              <img
                src="images/background-image.jpg"
                style={{ height: "339px" }}
              />
            </div>
            <div class="card-content">
              <p>
                The only difference between success and failure is the ability
                to take action NOW.
              </p>
            </div>
          </div>
        </div>

        <div class="col s4">
          <div class="card">
            <div class="card-image">
              <img src="images/done.jpg" style={{ height: "339px" }} />
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>Enter DoItNow: Let's get organized together!</p>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
          <p style={{fontSize:40, fontFamily:"Dancing Script",textAlign:"center"}}>"Time management is life management." - Robin Sharma</p>
      </div>

      <footer
        class="page-footer col s12 white"
        style={{ bottom: 0, position: "fixed", width: "100%" }}
      >
        <div class="footer-copyright teal darken-1">
          <div class="container">
             

              <div className="row" style={{ fontSize: 20 }}>
              <div className="col">© 2022 Denisa Iordache</div>
              <div className="col s6"></div>
                <div className="col ">
                  <AiFillLinkedin />
                  <a href="https://www.linkedin.com/in/denisa-elena-iordache-947544222/" style={{color:'white'}}>LinkedIn</a>
                </div>
                <div className="col">
                  <AiFillGithub />
                  <a href="https://github.com/denisaiordache" style={{color:'white'}}>GitHub</a>
                </div>
                <div className="col">
                  <IoMdMail />
                  <a href="mailto:denisaiordache01@gmail.com" style={{color:'white'}}>Email</a>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default WelcomePage;
