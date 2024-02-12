export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            //Payload es todo el todo
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            //Aqui el payload seria solo el id
            return initialState.filter(todo => todo.id !== action.payload);


        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        //Regresar un nuevo todo para esparcir
                        //TOdas las propiedades tal cual estaban
                        ...todo,
                        //SOlo necesito tomar la propiedad booleana
                        //Que quiero cambiar
                        done: !todo.done,
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }
}