import "./NewBlog.scss";

const NewBlog = () => {
  const postBlog = () => {
    console.log("Joe");
  };
  return (
    <form action="post" method="post">
      <h1>CREATE A NEW BLOG</h1>

      <div className="row">
        <input type="text" name="fancy-text" id="fancy-text" />
        <label for="fancy-text">Name</label>
      </div>

      <div className="row">
        <textarea name="fancy-textarea" id="fancy-textarea"></textarea>
        <label for="fancy-textarea">Description</label>
      </div>

      <button type="submit" tabindex="0">
        Submit
      </button>
    </form>
  );
};

export default NewBlog;
