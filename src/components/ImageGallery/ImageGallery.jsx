// import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    image: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=32297274-6805a2e4fdba4765ca35c3823&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(console.log);
    }
  }
  render() {
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem imageName={this.props.imageName} />
        </ul>
      </>
    );
  }
}

// export const ImageGallery = ({imageName}) => {
//   // console.log(imageName)
//   return (
//     <ul className={css.gallery}>
// <ImageGalleryItem imageName={imageName}/>

//       {/* {contacts.map(contact => {
//         return (
//           <li className={css.item} key={contact.id}>
//             <ImageGalleryItem
//             />
//           </li>
//         );
//       })} */}

//     </ul>
//   );
// };

// ImageGallery .propeTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
