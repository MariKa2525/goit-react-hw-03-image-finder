// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageName }) => {
  return (
    <>
      {imageName}
      <li className={css.galleryItem}>
        <img className={css.galleryImage} src="" alt="" />
      </li>
    </>
  );
};

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
