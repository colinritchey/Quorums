import React from 'react';
import { Link, hashHistory } from 'react-router';

import QuestionIndexContainer from '../question/question_index_container';
import SidebarContainer from '../sidebar/sidebar_container';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }

  componentDidMount(){
    this.props.updateFilter('searchByTitle', this.props.searchByTitle);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.searchByTitle !== this.props.searchByTitle){
      this.props.updateFilter('searchByTitle', newProps.searchByTitle);
    }
  }


  render(){
    return(
      <div className="content">
        <div className="empty-sidebar col col-1-4">
          &nbsp;
        </div>

        <SidebarContainer />
        <QuestionIndexContainer formType="none"/>

      </div>
    );
  }
}

export default Search;
