import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgList } from './ImageGallery.styled';

export const ImageGallery = ({ imgCollection }) => {
  return (
    <ImgList>
      {imgCollection.map(img => {
        return (
          <ImageGalleryItem key={img.id} src={img.previewURL} alt={img.tags} />
        );
      })}
    </ImgList>
  );
};
