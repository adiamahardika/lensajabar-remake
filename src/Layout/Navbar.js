import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-lensajabar.png";
import "./css/Navbar.css";
import ScrollMenu from "react-horizontal-scrolling-menu";

const list = [
  { name: "Beranda", link: "/" },
  { name: "Nasional", link: "/nasional" },
  { name: "Daerah", link: "/daerah" },
  { name: "Polhukam", link: "/polhukam" },
  { name: "Lensa Ekbis", link: "/lensaekbis" },
  { name: "Lensa Sospenbud", link: "/lensasospenbud" },
  { name: "Peristiwa", link: "/peristiwa" },
  { name: "Humaniora", link: "/humaniora" },
  { name: "Lensa Wisata", link: "/lensawisata" },
  { name: "Dua Sisi", link: "/duasisi" },
  { name: "Lensa Sport", link: "/lensasport" },
  { name: "Ragam", link: "/ragam" },
  { name: "Advertorial", link: "/advertorial" },
  { name: "Karir", link: "/karir" },
];

const MenuItem = ({ text, selected, link }) => {
  return <Link className={`menu-item ${selected ? "active" : ""}`} to={link}>{text}</Link>;
};

export const Menu = (list, selected) =>
  list.map((el) => {
    const { name, link } = el;
    return <MenuItem text={name} key={name} selected={selected} link={link}/>;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "Beranda";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list, selected);
  }
  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const menu = this.menuItems;
    
    return (
      <div className="container">
        <div className="top-nav">
          <div className="row">
            <Link to="/">
              <img className="navbar-logo" src={Logo} alt="Lensa Jabar" />
            </Link>
            <div className="navbar-search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row bottom">
            <div className="list">
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
