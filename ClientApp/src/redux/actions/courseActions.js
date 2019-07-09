import ActionType from '../ActionType';
import {fetchPosts} from '../../services/ApiCalls'

export const createCourse = () => {
    return dispatch=> fetchPosts()
    .then(posts => {
        dispatch({
            type: ActionType.CREATE_COURSE,
            payload: posts
        });
    });
}