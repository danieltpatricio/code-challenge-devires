import React, { memo } from 'react';
import { ITodo } from 'models/todos';
import { List, ListItem } from '@chakra-ui/react';
import CardTodo from 'components/CardTodo';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { DefaultState } from 'models/redux';

function ListTodos() {
  const { data } = useSelector<RootState, DefaultState<ITodo[]>>(
    (store) => store.todoReducer
  );

  return (
    <List spacing={3}>
      {data.map((i) => (
        <ListItem key={i.id}>
          <CardTodo todo={i} />
        </ListItem>
      ))}
    </List>
  );
}

export default memo(ListTodos);
