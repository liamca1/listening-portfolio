import React from "react";

function ItemPreview({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </>
  );
}

export default ItemPreview;
