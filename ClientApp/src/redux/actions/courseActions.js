import ActionType from '../ActionType';

//these types of functions are called action creators
export const createCourse = (course) => {
    return {
        type: ActionType.CREATE_COURSE,
        payload: course
    }
}