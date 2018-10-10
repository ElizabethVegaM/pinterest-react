import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-grid-system';
import HeaderButtons from './HeaderButtons';
import HeaderOptions from './HeaderOptions';
import ImageModal from './ImageModal';
import axios from 'axios';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 100,
      url: 'https://pixabay.com/api',
      apiKey: '9790189-118fcad7d04fb9dc16cd5033c',
      search: '',
      pictures: []
    }
  }

  componentDidMount() {
    axios
      .get(
        `${this.state.url}/?key=${this.state.apiKey}&q=${this.state.search}&orientation=vertical&per_page=${this.state.quantity}&safesearch=true`)
      .then(result => {
        console.log(result.data.hits)
        this.setState({ pictures: result.data.hits })
      })
      .catch(err => console.log(err));
  }

  handleChange (event) {
    if (event.key === 'Enter') {
      let input = document.getElementById('searchInput');
      this.setState({search: input.value})
      axios
      .get(
        `${this.state.url}/?key=${this.state.apiKey}&q=${this.state.search}&orientation=vertical&per_page=${this.state.quantity}&safesearch=true`)
      .then(result => {
        console.log(result.data.hits)
        this.setState({ pictures: result.data.hits })
      })
      .catch(err => console.log(err));
     }
  }

  handleScroll() {
    // console.log('hola')
  }

  render() {
    const options = [{name: 'Inicio'}, {name: 'Siguiendo', icon: 'fas fa-user-friends'}, {name: 'Explorar', icon: 'fas fa-compass'}, {name: 'Rav', icon: 'fas fa-user-circle'}];
    const buttons = ['fas fa-comment-dots', 'fas fa-bell', 'fas fa-ellipsis-h'];
    return (
      <div className="pinterest-header row" onScroll={this.handleScroll()}>
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
        <div id="imageContainer" class="container-fluid main">
        {
          this.state.pictures.map(pics => <LazyLoadComponent>
            <ImageModal url={pics.largeImageURL} likes={pics.likes} />
          </LazyLoadComponent>)
        }
      </div>
      </div>
    )
  }
};

export default Main;