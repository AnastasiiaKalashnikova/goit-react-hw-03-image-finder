import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imgCollection }) => {
  return (
    <ul>
      {imgCollection.map(img => {
        return (
          <ImageGalleryItem key={img.id} src={img.previewURL} alt={img.tags} />
        );
      })}
    </ul>
  );
};
