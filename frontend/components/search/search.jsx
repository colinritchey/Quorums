import React from 'react';
import { Link, hashHistory } from 'react-router';

import QuestionIndexContainer from '../question/question_index_container';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }

  componentDidMount(){
    this.props.updateFilter('searchWords', this.props.searchWord);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.searchWord !== this.props.searchWord){
      this.props.updateFilter('searchWords', newProps.searchWord);
    }
  }

  render(){
    return(
      <div className="content">
        <div className="empty-sidebar col col-1-4">
          &nbsp;
        </div>

        <section className="subs-container ">
          <section>
            <h3>By Type</h3>
          </section>

          <ul>
            <li>
              Question
            </li>
            <li>
              Answer
            </li>
            <li>
              Author
            </li>
            <li>
              Tag
            </li>
          </ul>

        </section>
        <QuestionIndexContainer formType="none"/>

      </div>
    );
  }
}

export default Search;
