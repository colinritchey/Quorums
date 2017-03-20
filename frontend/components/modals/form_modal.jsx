import React from 'react';
import Modal from 'react-modal';
import { form_style } from './modal_style';

import QuestionFormContainer from '../question_form/question_form_container';
import AnswerForm from '../answer/answer_form';

class FormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getForm = this.getForm.bind(this);

  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  getForm(){
    if (this.props.question){
      return(
        <QuestionFormContainer
          formType="edit"
          question={this.props.question}
          closeModal={this.closeModal}
        />
      );
    } else {
      return(
        <AnswerForm
          answer={this.props.answer}
          createAnswer={this.props.createAnswer}
          updateAnswer={this.props.updateAnswer}
          questionId={this.props.questionId}
          closeModal={this.closeModal}
        />
      );
    }
  }

  render() {
    const form = this.getForm();

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

          {form}

        </Modal>
      </div>
    );
  }
}

export default FormModal;
