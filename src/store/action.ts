import { Dispatch } from 'redux'
export const updateName = (value: string) => ({ type: 'UPDATE_NAME', value });

export const getRandomName = () => async (dispatch: Dispatch) => {
    const respPromise = await fetch('http://jsonplaceholder.typicode.com/users/1');
    const respData = await respPromise.json();
    dispatch({ type: 'UPDATE_NAME', value: respData.name })
}

