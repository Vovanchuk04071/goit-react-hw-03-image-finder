import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick }) => (
  <button onClick={onClick} className={style.Button} type="button">
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
