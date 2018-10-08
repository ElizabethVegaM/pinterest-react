import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-grid-system';
import PrintPictures from '../PrintPictures/PrintPictures';
import HeaderButtons from './HeaderButtons';
import HeaderOptions from './HeaderOptions';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 20,
      apiKey: '9790189-118fcad7d04fb9dc16cd5033c',
      search: '',
      pictures: []
    }
  }

  componentDidMount() {
    fetch(`https://pixabay.com/api/?key=${this.state.apiKey}&q=${this.state.search}&per_page=${this.state.quantity}`)
    .then(results => results.json()
    ).then(data => {
      let pictures = data.hits.map(pic => pic.largeImageURL)
      this.setState({pictures: pictures});
    })
  }

  componentDidUpdate() {
    fetch(`https://pixabay.com/api/?key=${this.state.apiKey}&q=${this.state.search}&per_page=20`)
    .then(results => results.json()
    ).then(data => {
      let pictures = data.hits.map(pic => pic.largeImageURL)
      this.setState({pictures: pictures});
      console.log(this.state.pictures);
    })
  }

  handleChange (event) {
    if (event.key === 'Enter') {
      let input = document.getElementById('searchInput');
      this.setState({search: input.value})
    }
  }

  render() {
    const options = [{name: 'Inicio'}, {name: 'Siguiendo', icon: 'fas fa-user-friends'}, {name: 'Explorar', icon: 'fas fa-compass'}, {name: 'Rav', icon: 'fas fa-user-circle'}];
    const buttons = ['fas fa-comment-dots', 'fas fa-bell', 'fas fa-ellipsis-h'];
    return (
      <div className="pinterest-header row">
        <button className="btn header-btn">
          <i className="fab fa-pinterest"></i>
        </button>
        <div className="input-group col-7">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-search"></i>
          </span>
          <input id="searchInput" name='pictures' placeholder="Buscar" onKeyPress={key => this.handleChange(key)} />
        </div>
        <div className="header-btns">
          {
            options.map(option => <HeaderOptions name={option.name} icon={option.icon} />)
          }
          {
            buttons.map(button => <HeaderButtons name={button} />)
          }
        </div>
        <div id="imageContainer" class="container-fluid main card-columns">
        {
          this.state.pictures.map(pics => <PrintPictures url={pics} />)
        }
      </div>
      </div>
    )
  }
};

export default Main;