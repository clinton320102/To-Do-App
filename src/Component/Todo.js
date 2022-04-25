import './Todo.css'
import { AiFillDelete } from 'react-icons/ai'

const Todo = ({ item, onDelete }) => {
  return (
    <div className="todo">
      <div className='item'>
        <h3>{item.text}</h3>
        <p className='date'>{item.date}</p>
      </div>
      <i className='delete__button'>
        <AiFillDelete 
          onClick={() => onDelete(item.id)}
        />
      </i>
    </div>
  )
}

export default Todo