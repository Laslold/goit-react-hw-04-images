import { ImageGalleryStyled } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
const ImageGallery = props => {
  const { items = [], showModal } = props;
  const elements = items.map(el => (
    <ImageGalleryItem key={el.id} itemData={el} showModal={showModal} />
  ));

  return <ImageGalleryStyled>{elements}</ImageGalleryStyled>;
};

export default ImageGallery;
ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
