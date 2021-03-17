import { GET_PROJECTS } from '../actions/types'

const initialState = {
    projects: [],
    project: {}
}


export default (state = initialState, action) => {
    
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                prjects: action.payload
            }

        default:
            return state;
    }

}
