import React from 'react';
import Modal from 'react-modal';
import { form_style } from './modal_style';

class SubscriptionFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      tag_ids: this.props.currentUser.tag_ids
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.updateTagIds = this.updateTagIds.bind(this);
    this.handleUpdateSubs = this.handleUpdateSubs.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  updateTagIds(id){
    return e => {
      let newArray = this.state.tag_ids.slice();

      if(e.target.checked){
        newArray.push(parseInt(id));
      } else {
        newArray = newArray.filter((tag_id) => tag_id !== id);
      }

      this.setState({ tag_ids: newArray });

    };
  }

  handleUpdateSubs(e){
    e.preventDefault();
    let currentUser = this.props.currentUser;
    currentUser.tag_ids = this.state.tag_ids;

    this.props.updateUser(currentUser);
    this.closeModal();
  }

  render() {
    let tagList = Object.keys(this.props.tags).map((id) => this.props.tags[id]);
    let user = this.props.currentUser;

    return(
      <div>
        <i className="fa fa-pencil-square-o"
        aria-hidden="true"
        title="Edit"
        onClick={this.openModal}></i>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel={"Form Modal"}
          style={form_style}>

          <div className="form-container">
            <form onSubmit={this.handleUpdateSubs} className="form">

              <ul className="tag-list-form">

                {tagList.map((tag, idx) => (

                  <li className="tag-item-form" key={idx}>

                    <label key={idx}>{tag.name}
                      <input type="checkbox"
                        value={tag.id}
                        name="[tag_ids][]"
                        checked={this.state.tag_ids.includes(tag.id)}
                        onClick={this.updateTagIds(tag.id)}></input>
                    </label>

                  </li>
                ))}
              </ul>

              <section className="form-submit">
                <input type="submit"></input>
              </section>

            </form>

          </div>


        </Modal>
      </div>
    );
  }
}

export default SubscriptionFormModal;
