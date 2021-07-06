import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
function App() {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [images, setImages] = useState([]);

  const handleSubmit = (text) => {
    setKeyword(text);
  };
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${keyword}&image_typre=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  }, [keyword]);

  return (
    <div className='container'>
      <Header handleSubmit={handleSubmit} />
      {isLoading ? (
        <h1>Loading Images</h1>
      ) : (
        <div className='row'>
          {images.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
