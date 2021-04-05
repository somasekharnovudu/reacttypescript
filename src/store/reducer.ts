export type storeType = {
    name: string
}

const initialState: storeType = {
    name: ''
}
type actionType = {
    type: string,
    value: any
}

const reducer = (store = initialState, action: actionType) => {
    switch (action.type) {
        case 'UPDATE_NAME': return {
            ...initialState,
            name: action.value
        }
        default: return {
            ...initialState
        }
    }
}
export default reducer
