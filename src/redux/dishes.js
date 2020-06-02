import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
                                errMess: null,
                                dishes:[]
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};
            /// ... : Sprint operator in ES6
            // Take a copy of current "state", and apply some modifications (isLoading, errMess, dishes)

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};