

const getData = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch({
                type: "UPDATETODOS",
                todos: json
            }))
    }
}

export {
    getData
}