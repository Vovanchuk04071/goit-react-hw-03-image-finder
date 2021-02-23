import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";
import style from "./Loader.module.css";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        className={style.Loader}
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
}
