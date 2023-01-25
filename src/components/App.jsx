import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { getImage } from './services/getImage';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    largeImage: '',
    loading: false,
    page: 1,
    isHideBtn: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.getFethImage();
    }
    if (prevState.imageName !== imageName && imageName !== '') {
      this.setState({ page: 1, images: [], loading: true, isHideBtn: false });
    }
  }

  getFethImage = () => {
    const { imageName, page } = this.state;

    getImage(imageName, page)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Sorry no image'));
      })
      .then(images => {
        if (images.hits.length === 0) {
          toast.error('Sorry, there are no images matching your search query');
        }
        if (images.hits.length < 12) {
          this.setState({ isHideBtn: true });
        }
        this.setState(prev => ({
          images: [...prev.images, ...images.hits],
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState({ largeImage: '' });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage });
  };

  render() {
    const { loading, images, largeImage } = this.state;
    // console.log(images)
    return (
      <>
        {loading && <Loader />}
        <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && (
          <ImageGallery images={images} showLargeImage={this.getLargeImage} />
        )}
        {images.length !== 0 && <Button onLoadMore={this.onLoadMore} />}
        {largeImage && (
          <Modal onClose={this.toggleModal} src={largeImage} images={images} />
        )}
      </>
    );
  }
}
