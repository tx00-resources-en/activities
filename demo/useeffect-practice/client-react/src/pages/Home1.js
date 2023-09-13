import { useEffect, useState } from "react"
import BlogList from "./BlogList";

import { REACT_APP_API_URL } from '../utils/apiConfig';
const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch(apiUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;