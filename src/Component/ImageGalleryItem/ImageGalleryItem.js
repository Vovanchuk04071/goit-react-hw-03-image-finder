import React from "react";
import style from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ items, onClick }) =>
  items.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li
        key={id}
        className={style.ImageGalleryItem}
        onClick={onClick(largeImageURL)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={style.ImageGalleryItem__image}
        />
      </li>
    );
  });

ImageGalleryItem.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
