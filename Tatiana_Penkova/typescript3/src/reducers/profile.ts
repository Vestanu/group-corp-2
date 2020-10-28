import { PROFILE_INFO_REQUEST, PROFILE_INFO_SUCCESS, PROFILE_INFO_FAILURE } from "../actions/profile";
import { ActionProfileType, InitailProfileStateType } from "../types";

const initialState: InitailProfileStateType = {
    entries: {},
    loading: false,
    error: false,
};

export const profileReducer = (state = initialState, action: ActionProfileType): InitailProfileStateType => {
    switch (action.type) {
        case PROFILE_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case PROFILE_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };

        case PROFILE_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};