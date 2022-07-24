export const myMiddleWear = storeApi => next => action => {
    if (typeof action === "function") {
        console.log(action)
        return action(storeApi.dispatch, storeApi.getState)
    }
    return next(action);
}