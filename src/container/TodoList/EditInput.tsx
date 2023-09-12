import { useState } from "react";
import { Button, Input } from "../../component";
import classes from "./style.module.css";

function EditInput({ task, id, editTask, editTodo }: any) {
  const [value, setValue] = useState(task);
  return (
    <div className={classes.edit_input}>
      <Input type="text" value={value} onChange={setValue} />
      <Button
        className={classes.save}
        type="button"
        onClick={() => {
          editTask(value, id);
          editTodo(id);
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default EditInput;
