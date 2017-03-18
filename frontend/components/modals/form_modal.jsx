import React from 'react';
import Modal from 'react-modal';
import { form_style } from './modal_style';

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
        <input type="submit"
          onClick={this.openModal}
          value={this.props.buttonText}></input>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel={"Form Modal"}
          style={form_style}>

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
