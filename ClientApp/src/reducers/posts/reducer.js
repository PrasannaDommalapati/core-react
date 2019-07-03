import ActionTypes from '../../actions/ActionType';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}