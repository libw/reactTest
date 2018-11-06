export function home(data, callback) {
    console,log(data)
    return dispatch => {

        dispatch({ type: 'SHOW', data: data })

    }
}