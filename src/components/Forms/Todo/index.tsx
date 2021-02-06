import React from 'react';
import { ITodo } from 'models/todos';
import TextField from 'components/Fields/Text';
import { Form, Formik, FormikHelpers } from 'formik';
import { saveTodo } from 'store/ducks/todos';
import { useDispatch } from 'react-redux';
import Yup from 'helper/yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
});

function TodoForm() {
  const apiTodo = saveTodo();
  const dispatch = useDispatch();

  const handleSubmit = (values: ITodo, formikHelpers: FormikHelpers<ITodo>) => {
    console.log(values);
    apiTodo(dispatch, values);
    formikHelpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{} as ITodo}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <TextField name="title" label="Titulo" />
        <TextField name="description" label="Descrição" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
