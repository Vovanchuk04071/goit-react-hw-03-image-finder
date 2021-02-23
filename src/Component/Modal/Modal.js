import React, { Component } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }
  handleKeydown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackDropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleBackDropClick}>
        <div className={style.Modal}>
          <img src={this.props.imgSrc} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
