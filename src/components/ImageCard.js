import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(', ');
  return (
    <div className='col-md-4 col-lg-3'>
      <div class='card mb-3'>
        <div class='card-body'>
          <img
            className='img-fluid'
            height='300px'
            src={image.webformatURL}
            alt=''
          />
          <h2 class='card-title mt-1'>Photo By : {image.user}</h2>

          <ul className='list-group mb-2'>
            <li className='list-group-item list-group-item-action'>
              Views : {image.views}
            </li>
            <li className='list-group-item list-group-item-action'>
              Likes : {image.likes}
            </li>
            <li className='list-group-item list-group-item-action'>
              Downloads : {image.downloads}
            </li>
          </ul>

          <div>
            {tags.map((tag, index) => (
              <span class='badge bg-success me-3' key={index}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
