import React, { Component, Fragment } from "react";
import Navbar from "../Layout/Navbar";
import Side from "../Layout/Side";
import Footer from "../Layout/Footer"
import Berita1 from "../images/berita-1.jpeg";
import Berita2 from "../images/berita-3.jpeg";
import Berita3 from "../images/berita-4.jpg";
import Berita5 from "../images/berita-5.jpg";
import Berita6 from "../images/olahraga.jpg"
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container home">
          <div className="row headerr">
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
                    <img src={Berita1} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Lorem Ipsum</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Berita2} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Lorem Ipsum</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Berita3} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Lorem Ipsum</h5>
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
          <h5 className="news mt-4">Berita</h5>
          <div className="row mt-2">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita5}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita5}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita5}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita5}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="news mt-4">Olahraga</h5>
          <div className="row mt-2">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita6}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita6}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita6}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <img
                    className="body-news-images"
                    src={Berita6}
                    alt="Images"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="body-title">Lorem Ipsum</div>
                  <div className="body-news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}
export default Home;
