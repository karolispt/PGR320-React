
import React from 'react';
import CreatePost from '../containers/CreatePost';
import PostList from '../containers/PostList';



const AddGrocery = () => {

        return(
            <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
        )
    
}

export default AddGrocery