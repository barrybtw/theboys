//import "./NewBlog.scss";

import React from "react";

const NewBlog = () => {
  return (
    <form action="POST" method="POST">
      <fieldset>
        <label for="blogTitle">Title</label>
        <input type="text" name="blog" id="blogTitle" required="required" />

        <label for="blogAuthor">Author</label>
        <input type="text" name="blog" id="blogAuthor" />

        <label for="blogPost">Post</label>
        <input type="text" name="blog" id="blogPost" />

        <button>Create new post</button>
      </fieldset>
    </form>
  );
};

export default NewBlog;
