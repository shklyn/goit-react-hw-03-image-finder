import PropTypes from 'prop-types';
import { ImageGalleryList, ImageGalleryItem, ImageGalleryItemImage} from './ImageGallery.styled';

export const ImageGallery = ({ hits, openModal }) => {
  return (
    <ImageGalleryList>
      {hits &&
        hits.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              onClick={() => {
                openModal(largeImageURL);
              }}
            >
              <ImageGalleryItemImage src={webformatURL} alt={id} />
            </ImageGalleryItem>
          );
        })}
    </ImageGalleryList>
  );
};

ImageGallery.prototype = {
  hits: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
