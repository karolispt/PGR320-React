import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions';

function PostList({ posts, onDelete }) {
  if(!posts.length) {
    return (
      <div>
        Ingen dagligvarer lagt til enda
      </div>
    )
  }
  return (
    <div>
      {posts.map(post => {
        return (
          <Post post={ post } onDelete={ onDelete } key={ post.name } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);