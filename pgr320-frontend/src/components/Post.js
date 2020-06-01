import React from 'react';

export default ({ post: { name, description, id }, onDelete }) => {
  return (
    <div>
      <h2>{ name }</h2>
      <p>{ description }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Slett
      </button>
    </div>
  );
};