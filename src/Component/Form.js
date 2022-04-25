import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Form.css'

const Form = ({ onClose, onAdd }) => {
  const [text, setText] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      return
    } else {
      onAdd({ text, date })
      onClose()
      setText("")
      setDate("")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>
          <h3>Add a plan!</h3>
          <i className='close__button'>
            <FaTimes onClick={onClose} />
          </i>
        </header>
        <input 
          type='text'
          placeholder='Add a Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input 
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input className='submit__button'
          type='submit'
          value='ADD TASK'
        />
      </form>
    </>
  )
}

export default Form