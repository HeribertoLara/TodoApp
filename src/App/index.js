import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
/* const defaultTodos=[
  { text:'Cortar cebolla', completed:true },
  { text:'terminar turoriales', completed:false },
  { text:'prepararlacopmida', completed:true },
  { text:'ponerse a dieta', completed:false}
  
] */


function App() {
  
  
  return (
    <TodoProvider>

      <AppUI/>
    </TodoProvider>
  );
}

export default App;
