import React, { useState } from 'react';

const Header = ({ handleSubmit }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <h1 className='display-4 text-center'>Image Gallery</h1>

      <form
        className='d-flex mb-3'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(keyword);
        }}
      >
        <input
          class='form-control mx-0 main-input'
          type='text'
          placeholder='Search for keywords'
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button class='btn btn-primary mx-0 main-btn' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
