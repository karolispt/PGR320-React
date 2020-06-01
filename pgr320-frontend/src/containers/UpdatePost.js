import { connect } from 'react-redux';
import { updatePost } from '../actions';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePost: post => {
      dispatch(updatePost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);