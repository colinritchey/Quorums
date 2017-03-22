import React from 'react';
import { Link, hashHistory } from 'react-router';

import QuestionIndexContainer from '../question/question_index_container';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // debugger;
    this.props.updateFilter('searchWords', "Quora");
  }

  render(){
    // debugger;
    return(
      <div className="content">
        <div className="empty-sidebar col col-1-4">
          &nbsp;
        </div>

        <section className="subs-container ">
          <section>
            <h3>Feed</h3>
            <Link to={"/"}><i className="fa fa-pencil-square-o"
                  aria-hidden="true"
                  title="Edit"></i></Link>
          </section>

          <ul>
            <li>
              Calculus
            </li>
            <li>
              Science
            </li>
            <li>
              Programming
            </li>
            <li>
              Javascript
            </li>
            <li>
              Cooking
            </li>
          </ul>

        </section>
        <QuestionIndexContainer formType="none"/>

      </div>
    );
  }
}

export default Search;
