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
      <div>
        <button onClick={this.openModal}>Delete</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel={"Delete Form Modal"}
          style={delete_style}>

          <h3>Are you sure you want to delete this question?</h3>
          <button onClick={() => (
              this.props.deleteQuestion(this.props.question.id)
            )}>Delete Question</button>

          <button onClick={() => this.closeModal()}>Cancel</button>

        </Modal>
      </div>
    );
  }
}

export default DeleteFormModal;
