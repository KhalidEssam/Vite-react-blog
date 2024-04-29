import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/blogActions';
import { selectBlogPosts, selectBlogLoading, selectBlogError } from '../selectors/blogSelectors';
import BlogList from '../components/BlogList';

const mapStateToProps = (state) => ({
    posts: selectBlogPosts(state),
    loading: selectBlogLoading(state),
    error: selectBlogError(state)
});

const mapDispatchToProps = {
    fetchBlogPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
