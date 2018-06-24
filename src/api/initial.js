import fetch from 'isomorphic-fetch'

export function fetchAllTasks() {
    const encodedURI = encodeURI(`http://127.0.0.1:4000/`)

    return fetch(encodedURI)
        .then((data) => data.json())
        .catch((error) => {
            console.warn(error)
            return null
        });
}