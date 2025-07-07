import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

function App() {
  /* const initialTasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Depploy the App", completed: false },
  ];
  */
  //en vez lo de arriba, hacerlo con estado
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Depploy the App", completed: false },
  ]);

  const deleteTask = (idElegido) => {
    setTasks(tasks.filter((task) => task.id !== idElegido));
  };

  /* const toggleCompletado = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id){
        task.completed = true
      }
    }))
      */
  //lo anterior: otra sintaxis
  // la funcion hace que si completed esta en false, pase a true
  const toggleCompletado = (idElegido) => {
    setTasks(
      tasks.map(
        (task) =>
          task.id === idElegido //task id es = al id?
            ? { ...task, completed: !task.completed } //trae todo el objeto y a la propiedad (completed) (!)cambiar el valor
            : task //sino es el objeto traer la tarea
      )
    );
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>To-DO List</h1>
      {/*<TodoList tasks={initialTasks} />*/}
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onCompleted={toggleCompletado}
      />

      {/*<AddTodo />*/}
      {/*<TodoItem />*/}
    </>
  );
}

export default App;

/*

Pasos para una TODO-list 
1 App: componente principal y va a manejar el estado de las tareas
2 TodoList: componente que va a mostrar la lista de tareas
3 AddItem: componente que va a mostrar cada tarea individual
4 AddTodo: componente que va a manejar el formulario para agregar nuevas tareas

funcionalidades que nos pide:
- Agregar una tarea
- Marcar una tarea como completada
- Eliminar una tarea

pasos:
1 Crear el componente App que muestre una lista de tareas.
2 Convertir la lista en estado y permitir cambiar el estado de completado de una tareas
3 Añadir un boton que elimine una tarea.

en el array de tareas, defino la estructura de cada tarea:
{
  id: 1,
  title: "Aprender React",
  completed: false
}

creo el TodoItem que recibe una tarea y una funcion.
(muestro la tarea y uso la funcion para cambiar su estado y eliminarla)

creo el TOdoList que recibe un array de tareas y una funcion Mapea las tareas

creo el AddTodo que recibe una funcion para agregar una tarea.
Muestra un formulario con un input y un boton. Al enviar el formulario
la tarea se agrega al array de tareas en el estado de App.

*/
