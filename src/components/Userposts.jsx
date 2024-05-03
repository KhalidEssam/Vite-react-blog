import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../reduxstore/actions/blogActions";
import BlogList from "../reduxstore/components/BlogList";


const BlogPostForm = ({ fetchPosts }) => {
    const CurrentUser = useSelector(state => state.user);
const handleSubmit = () => {
    useEffect(() => {
        fetchPosts(CurrentUser.user?.email);
    },[CurrentUser])

}
    
    return (

        <>
    
        {handleSubmit()}
        </>
    );
};




export const Userposts = () => {
    const dispatch = useDispatch();
    // const { posts, loading, error } = useSelector(state => state.blog);
    const { posts, loading, error } = useSelector(state => state.blog);
    return (
        <>
         {/* Render BlogPostForm and pass fetchPosts action creator */}
        <BlogPostForm fetchPosts={(email) => dispatch(fetchPosts(email))}/> 

        <BlogList {...{ posts, loading, error }}    />
        </>
    );
};
export default Userposts;