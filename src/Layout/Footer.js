import React, { Component } from "react";
import "./css/Footer.css";
import Logo from "../images/logo-lensajabar.png";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="container footer">
          <div className="row">
            <div className="col-md-8">
              <img className="footer-logo" src={Logo} alt="..." />
            </div>
            <div className="col-md-4">
              <div className="row footer">
                <div className="col-md-3">
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Twitter</p>
                  <p>Line</p>
                </div>
                <div className="col-md-6">
                  <p>Tentang</p>
                  <p>Ketentuan & Kebijakan Privasi</p>
                </div>
                <div className="col-md-3">
                  <p>Tentang</p>
                  <p>Karir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
