import AppBar from 'components/AppBar';
import Container from 'components/Container';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { deleteTodo, getTodo } from 'store/ducks/todos';
import { DefaultState } from 'models/redux';
import { ITodo } from 'models/todos';
import TodoForm from 'components/Forms/Todo';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector<RootState, DefaultState<ITodo[]>>(
    (store) => store.todoReducer
  );

  useEffect(() => {
    const findTodo = getTodo();
    findTodo(dispatch);
  }, [dispatch]);

  const handleDelete = useCallback(
    (id: number) => () => {
      const removeTodo = deleteTodo();
      removeTodo(dispatch, id);
    },
    [dispatch]
  );

  return (
    <Container>
      <AppBar title="To Do - List" />
      <ul>
        {todos.data?.map((t) => (
          <div key={`li-todos-${t.id}`}>
            <li key={`li-todos-${t.id}`}>{t.title}</li>
            {t.id && <button onClick={handleDelete(t.id)}>X</button>}
          </div>
        ))}
      </ul>
      <TodoForm />
    </Container>
  );
}

export default App;
