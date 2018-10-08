import React from 'react';

const HeaderOptions = (props) => {
  return (
    <button className="btn header-options">
      <span>{props.name}</span>
      <i className={props.icon}></i>
    </button>
  )
};

export default HeaderOptions;