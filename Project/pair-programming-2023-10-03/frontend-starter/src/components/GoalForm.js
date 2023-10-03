import { useState } from "react"
import { useGoalsContext } from "../hooks/useGoalsContext"
import { useAuthContext } from '../hooks/useAuthContext'

const GoalForm = () => {
  const { dispatch } = useGoalsContext()
  const { user } = useAuthContext()

  const [text, setText] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const goal = {text}

    const response = await fetch('/api/goals', {
      method: 'POST',
      body: JSON.stringify(goal),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setText('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_GOAL', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Goal</h3>

      <label>Text:</label>
      <input 
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className={emptyFields.includes('text') ? 'error' : ''}
      />
      <button>Add Goal</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default GoalForm