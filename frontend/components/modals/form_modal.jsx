import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

import QuestionFormContainer from '../question_form/question_form_container';

class FormModal extends React.Component {
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
        <button onClick={this.openModal}>{this.props.buttonText}</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel={"Form Modal"}
          style={ModalStyle}>

          <QuestionFormContainer
            formType="edit"
            question={this.props.question}
            closeModal={this.closeModal}
          />

        </Modal>
      </div>
    );
  }
}

export default FormModal;
