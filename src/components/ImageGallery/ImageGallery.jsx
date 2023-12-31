import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
// import ImageGalleryItem from './ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onClick={() => onImageClick(image.largeImageURL)}
      />
    ))}
  </ul>
);


