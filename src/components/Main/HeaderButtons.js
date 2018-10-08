import React from 'react';

const HeaderButtons = (props) => {
  return (
    <button class="btn header-btn">
      <i className={props.name}></i>
    </button>
  )
};

export default HeaderButtons;