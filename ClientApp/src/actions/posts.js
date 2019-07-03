import ActionTypes from './ActionType'
import axios from 'axios'

export const fetchPosts = () => async (dispatch) => {
    await axios.get("https://reqres.in/api/unknown")
        .then(response => dispatch({
            type: ActionTypes.GET_POSTS,
            payload: response.data
        }))
        .catch(console.log);
}