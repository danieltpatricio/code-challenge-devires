import AppBar from 'components/AppBar';
import Container from 'components/Container';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodo } from 'store/ducks/todos';
import TodoForm from 'components/Forms/Todo';
import ListTodos from 'components/ListTodos';
import Modal from 'components/Modal';
import { Button, Center, useDisclosure } from '@chakra-ui/react';
import AddIcon from 'mdi-react/AddIcon';

function App() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const findTodo = getTodo();
    findTodo(dispatch);
  }, [dispatch]);

  return (
    <>
      <Modal
        title="Adicionar"
        action="Adicionar"
        isOpen={isOpen}
        onClose={onClose}
        submitForm="form-add-todo"
      >
        <TodoForm formId="form-add-todo" onClose={onClose} />
      </Modal>
      <Container display="grid" gridGap="10px" maxWidth="lg">
        <AppBar title="Challenge To-Do" />
        <ListTodos />
        <Center>
          <Button
            leftIcon={<AddIcon />}
            onClick={onOpen}
            colorScheme="teal"
            variant="outline"
          >
            Adicionar
          </Button>
        </Center>
      </Container>
    </>
  );
}

export default App;
