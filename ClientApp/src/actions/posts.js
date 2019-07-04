import ActionTypes from './ActionType'
import{fetchPosts as GetPosts} from '../services/ApiCalls'

export const fetchPosts = () => async (dispatch) => {

    await GetPosts()
        .then(response => {
            console.log(response.data)
            return dispatch({
            type: ActionTypes.GET_POSTS,
            payload: response.data
        })})
        .catch(console.log);
}