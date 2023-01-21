import css from './Modal.module.css';
import React, { Component } from 'react';

export default class Modal extends Component {
componentDidMount() {
window.addEventListener('keydown', this.handleKeyDown)
}

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
}

handleKeyDown = evt => {
    if(evt.code === 'Escape') {
        this.props.onClose()
    }
}
handleOverlayClick = evt => {
    if(evt.currentTarget === evt.target) {
        this.props.onClose()
    }
}
    render() {
        return (
            <div className={css.overlay} onClick={this.handleOverlayClick}>
            <div className={css.modal}>
              <div>{this.props.children}</div>
              <img src="" alt="" />
            </div>
          </div>
        )
    }
   
}

