#  useReducer()

## Refactor the App component from using `useState` to `useReducer`. 

```jsx
//App.js
import { useState } from 'react';
import './App.css';

function App() {
  // State for task input
  const [taskInput, setTaskInput] = useState('');

  // State for the list of tasks
  const [tasks, setTasks] = useState([]);

  // State for the task being edited
  const [editingTask, setEditingTask] = useState(null);

  // State for the filter (completed or active tasks)
  const [filter, setFilter] = useState('all');

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to edit a task
  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Function to clear completed tasks
  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  // Filtered tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all' filter, show all tasks
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="filter">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {editingTask === index ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => editTask(index, e.target.value)}
                onBlur={() => setEditingTask(null)}
                autoFocus
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span
                  className={task.completed ? 'completed' : ''}
                  onClick={() => setEditingTask(index)}
                >
                  {task.text}
                </span>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {tasks.some((task) => task.completed) && (
        <button onClick={clearCompletedTasks}>Clear Completed</button>
      )}
    </div>
  );
}

export default App
```


## Instructions

follow these steps:

1. **Create a Reducer Function:** Define a reducer function that will handle state transitions based on dispatched actions. This function should take the current state and an action and return the new state based on the action's type and payload.

```jsx
function taskReducer(state, action) {
  switch (action.type) {
    case 'SET_TASK_INPUT':
      return { ...state, taskInput: action.payload };
    case 'ADD_TASK':
      // Implement the logic to add a task in this case block.
    case 'TOGGLE_TASK':
      // Implement the logic to toggle task completion in this case block.
    case 'EDIT_TASK':
      // Implement the logic to edit a task in this case block.
    case 'DELETE_TASK':
      // Implement the logic to delete a task in this case block.
    case 'CLEAR_COMPLETED_TASKS':
      // Implement the logic to clear completed tasks in this case block.
    case 'SET_FILTER':
      // Implement the logic to set the filter in this case block.
    default:
      return state;
  }
}
```

2. **Define Initial State:** Create an initial state object that includes all the states you were managing with `useState`. In this case, the initial state should include `taskInput`, `tasks`, `editingTask`, and `filter`.

```jsx
const initialState = {
  taskInput: '',
  tasks: [],
  editingTask: null,
  filter: 'all',
};
```

3. **Replace `useState` with `useReducer`:** Replace each instance of `useState` with the `useReducer` hook by calling `useReducer` with your reducer function (`taskReducer`) and initial state. Assign the resulting state and dispatch function to variables.

```jsx
const [state, dispatch] = useReducer(taskReducer, initialState);
```

4. **Update Function Calls:** Modify the function calls (e.g., `setTaskInput`, `setTasks`, etc.) inside your event handlers (e.g., `addTask`, `toggleTaskCompletion`, etc.) to dispatch actions instead of directly modifying state.

For example, instead of:

```jsx
setTaskInput(newInputValue);
```

Use:

```jsx
dispatch({ type: 'SET_TASK_INPUT', payload: newInputValue });
```

Repeat this step for all state-modifying actions.

5. **Update State References:** Replace references to the state variables (`taskInput`, `tasks`, `editingTask`, and `filter`) with references to the corresponding properties in the `state` object.

For example, replace:

```jsx
<input
  type="text"
  value={taskInput}
  onChange={(e) => setTaskInput(e.target.value)}
/>
```

With:

```jsx
<input
  type="text"
  value={state.taskInput}
  onChange={(e) => dispatch({ type: 'SET_TASK_INPUT', payload: e.target.value })}
/>
```

Repeat this step for all references to state variables.

By following these steps, you can refactor the given example to use `useReducer` instead of `useState` while maintaining the same functionality.

## CSS

Here's is CSS

```css
/* App.css */
.todo-app {
    max-width: 400px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  .add-task {
    display: flex;
    margin-bottom: 10px;
  }
  
  .add-task input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .add-task button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .filter {
    margin-top: 10px;
  }
  
  .filter button {
    background-color: #008CBA;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .filter button.active {
    background-color: #4caf50;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .completed {
    text-decoration: line-through;
    color: #777;
  }
  
  li input[type="text"] {
    flex-grow: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .clear-button {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 14px;
  }
  
```

## Setup 

Create a new React application. Please choose only **one** alternatives

- First method

Open your terminal and run:
```sh
npx degit tx00-web/react-starter#main useReducer-lab
cd useReducer-lab
npm install
```

- Second method using CRA
Open your terminal and run:

```sh
npx create-react-app useReducer-lab
cd useReducer-lab
npm install
```

- Third method using Vite
Open your terminal and run:
```sh
npx degit tx00-web/vite-template#main useReducer-lab
cd useReducer-lab
npm install
```


## Ref
- https://react.dev/reference/react/useReducer
- https://www.robinwieruch.de/react-usereducer-hook/
- https://www.w3schools.com/react/react_usereducer.asp