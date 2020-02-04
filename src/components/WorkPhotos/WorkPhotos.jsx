import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../actions/index";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => (
      <img
        src={`https://images.ctfassets.net${post.fields.photo.sys.id}
      `}
        alt="hej"
      />
    ));
  }
  render() {
    return <div>{this.renderPosts()}</div>;
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
