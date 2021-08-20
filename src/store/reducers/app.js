import { handleActions } from "redux-actions";
import initState from '../initState'
import {
    addToken
} from '../actions'

export default handleActions({
    [addToken]: (state, { payload: { text } }) => ({
        ...state,
        token: state.token.concat([{ text }])
    })
}, initState.app)