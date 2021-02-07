import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { DefaultState } from 'models/redux';
import { ITodo } from 'models/todos';
import api from 'services/api';
import { RootState } from 'store';

const INITIAL_STATE: DefaultState<ITodo[]> = {
  data: [],
  loading: false,
  error: undefined,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    setTodos: (state, { payload }: PayloadAction<ITodo[]>) => ({
      ...state,
      data: payload,
    }),
    addTodo: (state, { payload }: PayloadAction<ITodo>) => ({
      ...state,
      data: [...state.data, payload],
    }),
    removeTodo: (state, { payload: id }: PayloadAction<number>) => ({
      ...state,
      data: state.data.filter((i) => i.id !== id),
    }),
  },
});

export const { setTodos, addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const getTodo = () => async (dispatch: Dispatch) => {
  const { data } = await api.get<ITodo[]>('/todos');
  dispatch(setTodos(data));
};

export const saveTodo = (todo: ITodo) => async (dispatch: Dispatch) => {
  const { data } = await api.post<ITodo>('/todos', todo);
  dispatch(addTodo(data));
};

export const deleteTodo = (id: number) => async (dispatch: Dispatch) => {
  await api.delete<ITodo>(`/todos/${id}`);
  dispatch(removeTodo(id));
};

export const selectTodosState = (state: RootState) => state.todoReducer;
