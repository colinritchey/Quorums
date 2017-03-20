import React from 'react';

import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
        <h3>Answers</h3>
        <ul>
          {this.props.answers.map((answer, idx) => (
            <AnswerIndexItem answer={answer} key={idx}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default AnswerIndex;
