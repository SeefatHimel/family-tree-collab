import Types from "./tree.types";

const initialState = {
    treeArray : [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
       
        case Types.GET_PROFILES_FULFILLED: {
            return {
                ...state,
                profileData: action.payload.data,
            };
        }
    }
    return state;
}
