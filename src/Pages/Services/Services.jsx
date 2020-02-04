import React from "react";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { ServicesGrid } from "../../components/ServicesGrid/ServicesGrid";
import { content } from "../../content";
import { ServicesWrapper } from "./styles";
import Posts from "../../components/posts/posts";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class Services extends React.Component {
  componentDidMount() {
    const { loadPosts, posts } = this.props;
    if (posts.length === 0) {
      loadPosts();
    }
  }
  render() {
    const { services } = content;
    return (
      <>
        <ServicesWrapper>
          <h1>{services.secTitle}</h1>
          <ServicesGrid content={services.icons} gridGap={true} />
        </ServicesWrapper>
        <Posts />
        <ContactBanner />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, actionCreators)(Services);
