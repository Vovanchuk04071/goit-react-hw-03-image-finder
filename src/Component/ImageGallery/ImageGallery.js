import React from "react";
import style from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ children }) => (
  <ul className={style.ImageGallery}>{children}</ul>
);

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ImageGallery;
