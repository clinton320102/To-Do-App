import Todo from "./Todo"

const Todos = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((item, index) => {
        return (
          <Todo key={index} item={item} onDelete={onDelete} />
        )
      })}
    </>
  )
}

export default Todos 