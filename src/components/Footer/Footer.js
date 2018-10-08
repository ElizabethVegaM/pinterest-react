import React, { Component } from 'react';

class Footer extends Component {

  render () {
    return (
      <footer class="pinterest-footer">
        <div class="btn-group dropleft">
          <button class="btn footer-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-plus"n/>
          </button>
          <div class="dropdown-menu">
            <button id="openModal" class="list-group-item list-group-item-action" data-toggle="modal" data-target="#exampleModalCenter">
              <i class="fas fa-plus"/>
              <span>Subir un pin</span>
            </button>
            <button class="list-group-item list-group-item-action">
              <i class="fas fa-globe" />
              <span>Guardar desde un sitio web</span>
            </button>
          </div>
        </div>
        <div>
          <button class="btn footer-btn">
            <i class="fas fa-question"></i>
          </button>
        </div>
      </footer>
    )
  }
}

export default Footer;