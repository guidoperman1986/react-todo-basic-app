import React from 'react';

import './TodoList.css';

interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {
                props.items.map(todo => <span>
                    <li key={todo.id}>{todo.text}</li>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                </span> )
            }
        </ul>
    )
}
