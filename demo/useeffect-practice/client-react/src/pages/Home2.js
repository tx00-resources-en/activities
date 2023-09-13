import { useEffect, useState } from "react"
import BlogList from "./BlogList";

import { REACT_APP_API_URL } from '../utils/apiConfig';
const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(apiUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 2000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;