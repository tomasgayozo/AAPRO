export const TodoItem = ({ task, onDelete, onCompleted }) => {
  return (
    <>
      <li>
        {task.text}
        <button onClick={() => onCompleted(task.id)}>
          {task.onCompleted ? "Desmarcado" : "Marcado"}
        </button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </li>
    </>
  );
};
