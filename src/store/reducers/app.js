import { handleActions } from "redux-actions";
import initState from '../initState'
import {
    addToken
} from '../actions'

export default handleActions({
    [addToken]: (state, { payload: { text } }) => ({
        token: text
    })
}, initState.app)