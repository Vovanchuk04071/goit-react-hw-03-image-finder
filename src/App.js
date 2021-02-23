import React, { Component } from "react";
import Searchbar from "./Component/Searchbar";
import ImageGallery from "./Component/ImageGallery";
import ImageGalleryItem from "./Component/ImageGalleryItem";
import styles from "./styles.module.css";
import Button from "./Component/Button";
import ImageApi from "./Component/Services/images-api";
import Loader from "./Component/Loader";
import Modal from "./Component/Modal";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: "",
  };

  componentDidMount() {
    this.fetchImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
      error: null,
    });
  };

  imagesSchrool = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchClickImages = (largeImageURL) => () => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    ImageApi.fetchImages(options)
      .then((hits) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        this.imagesSchrool();
      })
      .catch((error) => this.setState({ error }))
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <div className={styles.App}>
        {error && <h1>Повторіть пошук</h1>}

        {showModal && (
          <Modal imgSrc={largeImageURL} onClose={this.toggleModal} />
        )}

        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery items={images}>
          <ImageGalleryItem items={images} onClick={this.fetchClickImages} />
        </ImageGallery>
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
