import React from 'react';
import { Link, hashHistory } from 'react-router';


class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.form = this.form.bind(this);
  }

  componentDidMount(){
    this.props.fetchTags();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateFilter('searchByTagId', e.target.value);
  }

  handleClick(filter){
    debugger;
    this.props.filter;
    return e => {
      this.props.updateFilter(filter, 33);
    };
  }

  form(){
    if(this.props.formType === "home"){
      return(
        <section className="subs-container ">
          <section>
            <h3>Feed</h3>
            <Link to={"/"}><i className="fa fa-pencil-square-o"
              aria-hidden="true"
              title="Edit"></i></Link>
          </section>

          <ul>
            {this.props.tags.map((tag) => (
              <li onClick={this.handleSubmit} value={tag.id}>{tag.name}</li>
            ))}
          </ul>

        </section>
      );
    } else {
      return(
        <section className="subs-container ">
          <section>
            <h3>By Type</h3>
          </section>

          <ul>
            <li>
              Question Title
            </li>
            <li>
              Question Content
            </li>
            <li onClick={this.handleClick('searchByTagId')}>
              Tag
            </li>
          </ul>

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
