import { useRecoilValue } from 'recoil';
import { todoListState } from '../atoms/todoListState';
import { TodoItemCreator } from '../components/todoItemCreator';
import { TodoItem } from '../components/todoItem';

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
