import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import  Modal  from './Modal/Modal';
// import { Title } from './Title/Title';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal})=> ({
      showModal: !showModal
    }));
  };

  render() {
    const { showModal } = this.state
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <button type='button' onClick={this.toggleModal}>Open</button>
        {showModal && <Modal onClose={this.toggleModal}><h1>Hay</h1></Modal>}
        {/* {showModal && <Modal />} */}
      </>
    );
  }
}

