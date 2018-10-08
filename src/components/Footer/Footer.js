import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row } from 'react-grid-system';

class Footer extends Component {
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
      centered: true
    });
  }

  render () {
    return (
      <footer className="pinterest-footer">
      <div className="btn-group dropleft">
        <button className="btn footer-btn" onClick={this.toggle}>
          <i className="fas fa-plus"n/>
        </button>
      <Modal id="uploadPin" isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
      <ModalHeader toggle={this.toggle}>Crear Pin</ModalHeader>
        <ModalBody>
          <Row>
            <div className="load-image col-5">
              <div className="load-container">
                <i className="fas fa-camera" />
                <p>
                  <strong>Arrastra, suelta o haz clic para cargar</strong>
                </p>
              </div>
            </div>
            <form>
              <div className="form-group">
                <label for="webSite">Sitio Web</label>
                <input type="url" className="form-control" id="webSite" placeholder="Añade la URL con la que enlaza este Pin" />
              </div>
              <div className="form-group">
                <label for="pinDescribe">Descripción</label>
                <textarea id="pinDescribe" className="form-control" cols="30" rows="6" placeholder="Di algo más sobre este Pin"></textarea>
              </div>
            </form>
          </Row>
        </ModalBody>
        <ModalFooter>
          <div className="upload-options">
            <span className="upload-pin">Cargar Pin</span>
            <span className="save-from">Guardar desde el sitio</span>
          </div>
          <button className="btn ok-btn" disabled>Listo</button>
        </ModalFooter>
      </Modal>
      </div>
      <div>
        <button className="btn footer-btn">
          <i className="fas fa-question"></i>
        </button>
      </div>
      </footer>
    )
  }
}

export default Footer;
