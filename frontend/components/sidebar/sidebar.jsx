import React from 'react';
import { Link, hashHistory } from 'react-router';

import SubscriptionFormModal from '../modals/subscriptions';

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFetchAll = this.handleFetchAll.bind(this);
    this.form = this.form.bind(this);
  }

  componentDidMount(){
    this.props.fetchTags();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateFilter('searchByTagId', e.target.value);
  }

  handleFetchAll(e){
    e.preventDefault();
    this.props.fetchQuestions();
  }

  form(){
    let userTags = [];
    if(this.props.currentUser.tag_ids){
      userTags = this.props.currentUser.tag_ids;
    }

    if(this.props.formType === "home"){
      return(
        <div>
          <div className="empty-sidebar col col-1-4">
            &nbsp;
          </div>

          <section className="subs-container ">
            <section>
              <h3>Feed</h3>
                <SubscriptionFormModal
                  currentUser={this.props.currentUser}
                  tags={this.props.tags}
                  updateUser={this.props.updateUser}
                />
            </section>

            <ul>
              <li onClick={this.handleFetchAll} key={"All"}>Featured</li>

              {this.props.tags.map((tag, idx) => {
                if(userTags.includes(tag.id)){
                  return (<li onClick={this.handleSubmit} key={idx}
                    value={tag.id}>{tag.name}</li>);
                } else {
                  return "";
                }

              })}
            </ul>


          </section>
        </div>
      );
    } else {
      return(
        <section className="subs-container ">

        </section>
      );
    }
  }

  render(){
    let form = this.form();
    return(
      <section>
        {form}
      </section>
    );
  }
}

export default Sidebar;
