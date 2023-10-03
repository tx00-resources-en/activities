import { useEffect }from 'react'
import { useGoalsContext } from "../hooks/useGoalsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import GoalDetails from '../components/GoalDetails'
import GoalForm from '../components/GoalForm'


const Home = () => {
  const {goals, dispatch} = useGoalsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch('/api/goals', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()
      if (response.ok) {
        dispatch({type: 'SET_GOALS', payload: json})
      }
    }

    if (user) {
      fetchGoals()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="goals">
        {goals && goals.map((goal) => (
          <GoalDetails key={goal._id} goal={goal} />
        ))}
      </div>
      <GoalForm />
    </div>
  )
}

export default Home