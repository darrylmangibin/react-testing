import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment)

    this.setState({ comment: '' })
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add a Comment</h3>
        <textarea 
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
 
export default connect(mapStateToProps, actions)(CommentBox);