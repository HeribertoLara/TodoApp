import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoContext } from "../TodoContext/index.jsx";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal/index.jsx";
import { TodoForm } from "../TodoForm/index.jsx";
import { Loader } from "./Loader/Loader.jsx";
function AppUI() {
  /* const {} React.useContext(TodoContext) */
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <Loader/>}
        {error && <p>😅 hubo un error</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal&&(
        <Modal>
          <TodoForm/>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}
        

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}
export { AppUI };
