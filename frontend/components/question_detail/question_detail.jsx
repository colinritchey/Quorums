import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';


class QuestionDetail extends React.Component {
  constructor(props){
    super(props);

    this.authorFunctions = this.authorFunctions.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestion(this.props.params.questionId);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.quesiton.id !== nextProps.params.postId){
  //     this.props.fetchQuestion(nextProps.params.questionId);
  //   }
  // }

  authorFunctions(){
    let currentUser = this.props.currentUser;
    let owner = this.props.question.user;
    let question = this.props.question;

    if(currentUser.id === owner.id){
      return (
        <section>
          <DeleteFormModal
            question={question}
            deleteQuestion={this.props.deleteQuestion} />

          <br/>
          
          <FormModal buttonText={"Edit"} question={question}/>
        </section>
      );
    } else {
      return(
        <section></section>
      );
    }
  }

  render(){
    const question = this.props.question;
    if (!question){
      return <div>Loading...</div>;
    }

    let body = <article>{question.body}</article>;

    if(!question.body){
      body = "";
    }

    let authorButtons = this.authorFunctions();

    return(
      <div className="content">
        <section className="question-detail">
          <h3>{question.title}</h3>
          {body}
        </section>
        {authorButtons}
      </div>
    );
  }
}

export default QuestionDetail;
