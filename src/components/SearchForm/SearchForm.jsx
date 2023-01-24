import React, { Component } from 'react';
import css from './SearchForm.module.css';
// import { ImSeach } from 'react-icons/im';
// import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  state = {
    imageName: '',
  };
  
  handleNameChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault()
    if(this.state.imageName.trim() === '') {
      return
    }
    this.props.onSubmit(this.state.imageName)
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <form className={css.searchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          name="imageName"
          value={this.state.imageName}
          onChange={this.handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
