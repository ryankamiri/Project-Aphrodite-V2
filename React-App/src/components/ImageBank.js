import React from 'react';

const ImageBank = ({ images, onSelectImage, selectedIndex }) => {
  const imageContainerStyle = index => ({
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    border: index === selectedIndex ? '2px solid blue' : '1px solid #ccc', // Highlight selected image
    boxSizing: 'border-box',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  };

  return (
    <div>
      <h2>Image Bank</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={imageContainerStyle(index)} onClick={() => onSelectImage(index)}>
            <img src={image} alt={`object-${index}`} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBank;
