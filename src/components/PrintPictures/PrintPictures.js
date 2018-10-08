import React from 'react';

const PrintPictures = (props) => {
  return (
    <div div class="pinWrapper card" data-toggle="modal">
      <img src={props.url} class="imageResult" alt="" />
        <div class="extra">
        <button class="btn pin-btn">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  )
}

export default PrintPictures;