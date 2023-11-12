import { Component } from 'react';
import { Img, ImgItem } from './ImageGalleryItem.styled';
//import { Modal } from 'components/Modal/Modal';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    console.log(this.state.isModalOpen);

    return this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImg, bigImg, alt } = this.props;
    // const isModalOpen = this.state.isModalOpen;
    return (
      <ImgItem onClick={this.openModal}>
        <Img src={smallImg} alt={alt} />

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </ImgItem>
    );
  }
}
