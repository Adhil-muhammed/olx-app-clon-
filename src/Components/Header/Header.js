import React, { useContext } from "react";
import { context1, FireContext } from "../../FirebseContext/Context";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";

function Header() {
  const { firebase } = useContext(FireContext);
  const { nameOfuser } = useContext(context1);
  const history = useHistory();
  const changeDirectory = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("confirm to LogOut");
      })
      .then(() => {
        history.push("/Login");
      });
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> English</span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to={"/signup"}>
            <span>
              {nameOfuser ? `Welcome mr:  ${nameOfuser.displayName}` : "Login"}
            </span>
          </Link>
          <hr />
        </div>
        {nameOfuser ? <span className="pointer"  onClick={changeDirectory}>Loge out</span> : ""}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to={"/Creat"}>
              <span>SELL</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
