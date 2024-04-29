export const selectCommentsByPostId = (state, postId) => state.comments[postId] || [];
export const selectCommentLoading = (state) => state.comments.loading;
export const selectCommentError = (state) => state.comments.error;
