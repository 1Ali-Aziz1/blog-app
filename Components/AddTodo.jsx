import { useState } from 'react'

function AddTodoForm() {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add the todo to the list
    setTodo('')
  }

  return (
    <form className="bg-white rounded shadow-md p-4" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="block text-gray-700 text-sm font-bold mb-2">
        Add a new todo
      </label>
      <input
        type="text"
        id="todo"
        placeholder='Add a todo...'
        className="w-[80%] mx-7 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="w-25 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-purple"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodoForm
