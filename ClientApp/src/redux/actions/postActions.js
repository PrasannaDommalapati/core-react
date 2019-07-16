import ActionType from '../ActionType';
import { fetchPosts } from '../../services/ApiCalls'

export const getPostsAction = () => {
    return dispatch => fetchPosts(2)
        .then(posts => {
            dispatch({
                type: ActionType.GET_POSTS,
                payload: posts
            });
        });
}