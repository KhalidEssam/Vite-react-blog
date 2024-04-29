import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';
import { selectCommentsByPostId, selectCommentLoading, selectCommentError } from '../selectors/commentSelectors';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const mapStateToProps = (state, ownProps) => ({
    comments: selectCommentsByPostId(state, ownProps.postId),
    loading: selectCommentLoading(state),
    error: selectCommentError(state)
});

const mapDispatchToProps = {
    addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
