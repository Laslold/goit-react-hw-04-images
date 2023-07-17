import PropTypes from 'prop-types';
import { ImageGalleryStyled, ImageStyled } from './GalleryItem.styled';

const imageGalleryItem = props => {
  const { showModal, itemData } = props;
  const { webformatURL, tags, largeImageURL } = itemData;

  return (
    <ImageGalleryStyled onClick={() => showModal({ tags, largeImageURL })}>
      <ImageStyled src={webformatURL} alt={tags} />
    </ImageGalleryStyled>
  );
};

imageGalleryItem.propTypes = {
  itemData: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  showModal: PropTypes.func.isRequired,
};
export default imageGalleryItem;
