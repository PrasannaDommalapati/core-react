import ActionType from '../ActionType';

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return [...state, { ...action.payload }];
        default:
            return state;
    }
}

export default postReducer;