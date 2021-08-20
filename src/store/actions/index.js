import { createActions } from "redux-actions";

const {
    addToken
} = createActions({
    ADD_TOKEN: (text) => ({ text })
}, {
    prefix: 'app'
})

export {
    addToken
}