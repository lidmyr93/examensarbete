import React from "react";

import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    /* console.log(this.props); */

    return <h1>redux</h1>;
  }
}

const mapStateToProps = state => {
  return {
    /*  posts: state.posts */
  };
};
export default connect(mapStateToProps)(Posts);

/* const mapStateToProps = (state, ownProps) => {

} */
