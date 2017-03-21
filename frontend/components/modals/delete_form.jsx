import React from 'react';
import Modal from 'react-modal';
import { delete_style } from './modal_style';

class DeleteFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return(
      <div >
        <i className="fa fa-trash-o"
          aria-hidden="true"
          title="Delete"
          onClick={this.openModal}></i>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel={"Delete Form Modal"}
          style={delete_style}>

          <h3 className="delete-header">Are you sure you want to delete this?</h3>
          <div className="delete-modal-container">
            <section className="delete-form-modal">
              <input
                value={this.props.textButton}
                type="submit"
                className="delete-modal-button"
                onClick={() => {
                  this.props.action(this.props.item);
                  this.closeModal();
                }}></input>

                <input type="submit"
                  onClick={() => this.closeModal()}
                  value="Cancel"></input>
              </section>
          </div>


        </Modal>
      </div>
    );
  }
}

export default DeleteFormModal;
