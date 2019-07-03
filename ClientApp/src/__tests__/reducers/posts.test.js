import ActionTypes from '../../actions/ActionType';
import postsReducer from '../../reducers/posts/reducer'
describe('posts reducer', () => {
    it('should returns inital state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('shuld return new state when received an action type', () => {
        let posts = [{ title: "test1" }, { title: "test2" }, { title: "test3" }, { title: "test4" }];

        const newState = postsReducer(undefined, {
            type: ActionTypes.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
})
