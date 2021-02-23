import React, { Component } from "react";
import style from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = { query: " " };

  heandleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };
  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            onChange={this.heandleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
