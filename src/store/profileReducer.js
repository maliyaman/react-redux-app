const PROFILE_INIT = 'PROFILE_INIT';

export function profileInit(profileHeader = {}){
    console.log(profileHeader);
    return {
        type : PROFILE_INIT,
        payload : profileHeader   
    }
}


export default function profileReducer(state = {}, action){
    console.log(action.payload);
    switch (action.type) {
        case PROFILE_INIT:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}