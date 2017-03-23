import React from 'react';
import { Link, hashHistory } from 'react-router';


class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchTags();
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    this.props.updateFilter('searchByTagId', e.target.value);
  }

  render(){
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
  }
}

export default Sidebar;
