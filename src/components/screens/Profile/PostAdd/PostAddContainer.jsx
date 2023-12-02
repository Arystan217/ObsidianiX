import { addPostActionCreator, newPostValueActionCreator } from "../../../../redux/postsReducer";
import PostAdd from "./PostAdd";
import { connect } from "react-redux";


const mapStateToProps = state => ({
  newPostValue: state.postsPage.newPostValue
})
const mapDispatchToProps = dispatch => ({
  handlePostButtonClick: e => {
    e.preventDefault();
    dispatch(addPostActionCreator())
  },
  newPostValueChange: newValue => {
    dispatch(newPostValueActionCreator(newValue))
  },
})

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd)


export default PostAddContainer