import React, { Component, Fragment } from "react";
import Navbar from "../Layout/Navbar";
import Banner from "../Layout/Banner";
import Side from "../Layout/Side";
import Berita1 from "../images/berita-1.jpeg";
import Berita2 from "../images/berita-3.jpeg";
import Berita3 from "../images/berita-4.jpg";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Berita1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Berita2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Berita3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <Side />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
