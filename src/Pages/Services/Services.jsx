import React from "react";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { ServicesGrid } from "../../components/ServicesGrid/ServicesGrid";
import { content } from "../../content";
import { ServicesWrapper, Wrapper } from "./styles";
import ImagesGrid from "../../components/ImageGrid/ImagesGrid";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";
import { Loading } from "../../components/Loading/Loading";
import MyModal from "../../components/Modal/Modal";
import { H1 } from "../../globalStyles/globalStyles";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modalIsOpen: false,
      modalData: null
    };
  }
  componentDidMount() {
    const { loadPosts, posts } = this.props;
    if (posts.length === 0) {
      loadPosts();
    }
    if (posts) {
      this.setState({ isLoading: false });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      this.setState({ isLoading: false });
    }
  }
  handleModalOpen = data => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, modalData: data });
  };
  handleModalClose = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, modalData: null });
  };
  render() {
    const { services } = content;
    const { isLoading, modalIsOpen, modalData } = this.state;
    return (
      <>
        <Wrapper>
          <ServicesWrapper>
            <H1 width="100%" margin="30px auto 40px auto">
              {services.secTitle}
            </H1>
            <ServicesGrid content={services.icons} gridGap={true} />
          </ServicesWrapper>

          {!isLoading && (
            <ImagesGrid
              data={this.props.posts}
              handleModalOpen={this.handleModalOpen}
            />
          )}
          {isLoading && (
            <div className="loader">
              <Loading loadinginfo={"images"} />
            </div>
          )}
        </Wrapper>
        <ContactBanner />
        <MyModal
          isOpen={modalIsOpen}
          modalData={modalData}
          handleModalClose={this.handleModalClose}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, actionCreators)(Services);
