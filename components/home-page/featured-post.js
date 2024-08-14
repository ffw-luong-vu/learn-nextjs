import PostsGrid from "../posts/posts-grid";
import classes from "./featured-post.module.css";

const FeaturedPost = (props) => {
  return (
    <div className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </div>
  );
};

export default FeaturedPost;
