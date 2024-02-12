import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    //Lo que se encuentra en localStorage con la llave todos
    //Si es nulo entonces regresa un arreglo vacio
    //Intenta parsear lo que esta ahi
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = (initialState = {}) => {
    //Si nada mas tienes un reducer se llama dispatch
    //Si tienes mas reducers lo llamas diferente
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        //Intento establecer los elementos
        localStorage.setItem('todos', JSON.stringify(todos));
        //Cada vez que cambie todos se guarda en localStorage
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };

        //Es la funcion que uso para mandar la accion al reducer
        //Que es el metodo que tiene los switch(todoReducer)
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    };

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
};