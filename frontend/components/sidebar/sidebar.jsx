import React from 'react';
import { Link, hashHistory } from 'react-router';


class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateFilter('searchByTitle', 'quora');
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
          <li onClick={this.handleSubmit}>
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
    );
  }
}

export default Sidebar;
