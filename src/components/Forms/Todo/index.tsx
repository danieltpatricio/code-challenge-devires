import React, { memo } from 'react';
import { ITodo } from 'models/todos';
import Input from 'components/Fields/Input';
import { Form, Formik, FormikHelpers } from 'formik';
import { saveTodo } from 'store/ducks/todos';
import { useDispatch } from 'react-redux';
import Yup from 'helper/yup';
import TextArea from 'components/Fields/TextArea';
import { useToast } from '@chakra-ui/react';

interface IProps {
  formId: string;
  onClose: () => void;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
});

function TodoForm(props: IProps) {
  const { formId, onClose } = props;
  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmit = async (
    values: ITodo,
    formikHelpers: FormikHelpers<ITodo>
  ) => {
    const apiTodo = saveTodo(values);
    await apiTodo(dispatch);
    formikHelpers.setSubmitting(false);
    onClose();
    toast({
      title: 'Tarefa adicionado com sucesso',
      description: 'A sua nova tarefa foi adiconado à lista de coisas a fazer!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Formik
      initialValues={{} as ITodo}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form id={formId}>
        <Input name="title" label="Titulo" />
        <TextArea name="description" label="Descrição" />
      </Form>
    </Formik>
  );
}

export default memo<IProps>(TodoForm);
