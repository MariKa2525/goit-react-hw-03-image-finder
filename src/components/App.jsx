import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import  Modal  from './Modal/Modal';
// import { Title } from './Title/Title';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

  toggleModal = () => {
    this.setState(({showModal})=> ({
      showModal: !showModal
    }));
  };

  render() {
    const { showModal } = this.state
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery imageName={this.state.imageName}/>
        {/* <button type='button' onClick={this.toggleModal}>Open</button> */}
        {showModal && <Modal onClose={this.toggleModal}><h1>Hay</h1></Modal>}
        {/* {showModal && <Modal />} */}
      </>
    );
  }
}

