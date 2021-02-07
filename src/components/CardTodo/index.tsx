import React, { memo, useCallback, useState } from 'react';
import { ITodo } from 'models/todos';
import { Text, useToast } from '@chakra-ui/react';
import { StyledContainer, StyledHeader } from './styles';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'store/ducks/todos';
import ButtonDelete from './ButtonDelete';

interface IProps {
  todo: ITodo;
}

function CardTodo(props: IProps) {
  const { todo } = props;
  const dispatch = useDispatch();
  const toast = useToast();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = useCallback(async () => {
    if (todo.id) {
      const removeTodo = deleteTodo(todo.id);
      await removeTodo(dispatch);
      toast({
        title: 'Tarefa removida com sucesso',
        description: `A tarefa "${todo.title}" foi removida da lista!`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [dispatch, toast, todo.id, todo.title]);

  const handleConfirmDelete = () => {
    setConfirmDelete((c) => !c);
  };

  return (
    <StyledContainer spacing={3}>
      <StyledHeader>
        <div>
          <Text fontSize="xs">Título:</Text>
        </div>
        <ButtonDelete
          confirmDelete={confirmDelete}
          onDelete={handleDelete}
          onConfirmDelete={handleConfirmDelete}
        />
      </StyledHeader>
      <Text>{todo.title}</Text>
      <Text fontSize="xs">Descrição:</Text>
      <Text whiteSpace="pre-wrap">{todo.description}</Text>
    </StyledContainer>
  );
}

export default memo<IProps>(CardTodo);
