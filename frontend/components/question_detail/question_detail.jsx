import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import AnswerIndex from '../answer/answer_index';
import AnswerForm from '../answer/answer_form';

class QuestionDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer: {body: ""},
      comment: {body: ""}
    };

    this.authorFunctions = this.authorFunctions.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleComment = this.handleComment.bind(this);
    // this.rec_tree = this.rec_tree.bind(this);
    // this.renderTree = this.renderTree.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestion(this.props.params.questionId);
  }

  authorFunctions(){
    let currentUser = this.props.currentUser;
    let owner = this.props.question.user;
    let question = this.props.question;

    if(currentUser.id === owner.id){
      return (
        <section className="quesiton-button-container">
          <DeleteFormModal
            question={question}
            deleteQuestion={this.props.deleteQuestion} />

          <FormModal buttonText={"Edit"} question={question}/>
        </section>
      );
    } else {
      return(
        <section></section>
      );
    }
  }

  handleAnswer(e){
    e.preventDefault();
    let answer = this.state.answer;
    answer.question_id = this.props.question.id;
    this.props.createAnswer(answer);

    this.setState({ body: ""});
  }

  // displayComments(){
  //   let raw_result = this.rec_tree(this.props.question.comments[""], this.props.question);
  //   console.log(raw_result);
  //   console.log(this.renderTree(raw_result));
  //   return raw_result;
  // }

  // rec_tree (list, question) {
  //   let new_list = [];
  //   // debugger;
  //   list.forEach((comment) => {
  //     let new_comment = comment;
  //     new_comment.child_comments = [];
  //
  //     if(question.comments[comment.id]){
  //       let result = this.rec_tree(question.comments[comment.id], question);
  //       new_comment.child_comments.push(result);
  //     }
  //
  //     new_list.push(new_comment);
  //   });
  //
  //   return new_list;
  // }

  // renderTree(tree){
  //   debugger;
  //   if(tree.length < 1){ return <div></div>; }
  //   return (
  //     <ul>
  //       {tree.map((comment, idx) => {
  //         console.log(comment.id, "comment");
  //
  //         return(
  //           <li key={idx}>
  //             {comment}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  handleComment(e){
    e.preventDefault();
    let comment = this.state.comment;
    comment.question_id = this.props.question.id;
    comment.parent_comment_id = null;
    this.props.createComment(comment);

    this.setState({ body: ""});
  }

  update(formType, field){
    return e => {
      this.setState({[formType]: {[field]: e.target.value}});
    };
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

    let answers = [];
    if(question.answers){
      answers = Object.keys(question.answers).map((id) => question.answers[id]);
    }

    // let comments = [];
    // let raw_tree = [];
    // if(question.comments){
    //   comments = Object.keys(question.comments).map((id) => question.comments[id]);
    //   raw_tree = this.displayComments();
    // }

    // putting aside for now
    // <form onSubmit={this.handleComment}>
    //   <label>Comment Body
    //     <input type="text"
    //       onChange={this.update("comment", "body")}
    //       value={this.state.comment.body}/>
    //   </label>
    //
    //   <input type="submit" />
    // </form>

    return(
      <div className="content">
        <section className="question-detail">
          <h3>{question.title}</h3>
          {body}
        </section>
        <AnswerIndex answers={answers} />

        <FormModal
          createAnswer={this.props.createAnswer}
          questionId={this.props.question.id}
          buttonText={"Answer"} />

        {authorButtons}
      </div>
    );
  }
}

export default QuestionDetail;
