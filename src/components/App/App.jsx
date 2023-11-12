import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchIng } from 'fetch';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
  };

  //записує значення інпута в стейт
  handleSubmit = value => {
    this.setState({ inputValue: value.input });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      try {
        //записали в стейт зображення
        const foundImgs = await fetchIng(this.state.inputValue);
        this.setState({ images: foundImgs.hits });
      } catch (error) {}
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imgCollection={this.state.images} />
        <Button>Load more</Button>
      </div>
    );
  }
}
