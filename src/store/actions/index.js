import { createActions } from "redux-actions";

const {
    addToken,
    addJob
} = createActions({
    ADD_TOKEN: (text) => ({ text }),
    ADD_JOB: (object) => ({ object })
}, {
    prefix: 'app'
})

export {
    addToken,
    addJob
}