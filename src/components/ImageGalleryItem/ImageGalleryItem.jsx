import { Img, ImgItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ImgItem>
      <Img src={src} alt={alt} />
    </ImgItem>
  );
};
