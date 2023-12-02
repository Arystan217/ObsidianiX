import { connect } from "react-redux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: state.postsPage.posts
})

const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer