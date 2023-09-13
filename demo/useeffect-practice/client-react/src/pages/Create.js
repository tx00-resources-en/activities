// const Create = () => {
//   return (
//     <div className="create">
//       <h2>Add a New Blog</h2>
//     </div>
//   );
// }
 
// export default Create;

import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const blog = { title, body, author };

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      console.log("Error");
    }
    if (response.ok) {
      setTitle("");
      setBody("");
      setAuthor("");
      // navigate('/');
      console.log('new blog added:', json)
    }

  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;




