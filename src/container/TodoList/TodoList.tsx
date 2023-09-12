import classes from "./style.module.css";
import { Button } from "../../component";
import EditInput from "./EditInput";

type TodoListProps = {
  todos: [{ id: number; task: string; done: boolean; edit: boolean }] | [];
  removeTodo: (e: number) => void;
  toggleComplete: (e: number) => void;
  editTodo: (e: number) => void;
  editTask: (e: string, m: number) => void;
};

function TodoList({
  todos,
  removeTodo,
  toggleComplete,
  editTodo,
  editTask,
}: TodoListProps) {
  return (
    <div className={classes.todo_list}>
      <ul>
        {todos?.map((todo: any) => (
          <li key={todo?.id}>
            {!todo?.edit ? (
              <p
                className={todo?.done && classes.active}
                onClick={() => toggleComplete(todo?.id)}
              >
                {todo?.task}
              </p>
            ) : (
              <EditInput task={todo?.task} editTask={editTask} id={todo?.id} editTodo={editTodo}/>
            )}

            <div className={classes.btns}>
              {!todo?.edit && (
                <Button
                  type="button"
                  className={classes.edit}
                  onClick={() => editTodo(todo?.id)}
                >
                  Edit
                </Button>
              )}

              <Button
                type="button"
                className={classes.remove}
                onClick={() => removeTodo(todo?.id)}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
