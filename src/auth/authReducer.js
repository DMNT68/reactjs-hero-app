import { types } from "../types/types";

// const state = {
//     name: 'Andrés',
//     email: 'andressalgado41@gmail.com'
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}