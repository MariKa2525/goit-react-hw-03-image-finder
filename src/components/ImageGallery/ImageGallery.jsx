// import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = () => {
  return (
    <ul className={css.gallery}>
<ImageGalleryItem />

      {/* {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <ImageGalleryItem        
            />
          </li>
        );
      })} */}
      
    </ul>
  );
};

// ImageGallery .propeTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
