import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>ToDoList</h1>
      <form
        onSubmit={handleSubmit(handleValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("toDo", {
            required: "Please write ad To Do",
          })}
          type="text"
          placeholder="Write a to do"
        />
        <span>{errors?.toDo?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
