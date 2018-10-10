/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Row, Col } from 'react-grid-system';

class ImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      centered: true,
      size: 'lg'
    });
  }

  render() {
    return (
      <div>
        <div class="pinWrapper card" onClick={this.toggle}>
          <img src={this.props.url} className="imageResult" alt="" />
          <div class="extra">
            <button class="btn pin-btn">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg image-modal">
          <ModalHeader toggle={this.toggle}>
            <Row>
              <button class="btn modal-circle-btn">
                <i class="fas fa-ellipsis-h"></i>
              </button>
              <div class="modal-btn-group">
                <button class="btn modal-btn">
                  <i class="fas fa-upload"></i>
                  <span>Enviar</span>
                </button>
                <button id="savePin" class="btn modal-btn">
                  <i class="fas fa-thumbtack"></i>
                  <span>Guardar</span>
                </button>
              </div>
            </Row>
          </ModalHeader>
          <ModalBody>
           <Row>
              <Col sm={8} class="large-image-container">
                <img src={this.props.url} class="image-result" alt="" />
              </Col>
              <Col sm={4} class="right-content">
                <button class="btn right-btn">
                  <i class="fas fa-arrow-up"></i>
                  <span>google.com</span>
                </button>
                <div class="right-comments">
                  <span>Comentarios</span>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="right-info row">
                  <div class="info-user col-9">
                    <i class="fas fa-user-circle"></i>
                    <span><strong>Rav</strong> ha guardado en <strong>Carpeta</strong></span>
                  </div>
                  <div class="info-pins col-3">
                    <i class="fas fa-thumbtack"></i>
                    <span>{this.props.likes}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ImageModal;