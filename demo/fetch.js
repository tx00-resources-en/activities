
const apiUrl = 'http://localhost:3001/api/blogs/';

const fetchBlogs = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    console.log(data);
}

fetchBlogs()

let id="64fffc06afe17589f7604afd"
const fetchBlog = async () => {
    const response = await fetch(`${apiUrl}/${id}`)
    console.log(`${apiUrl}/${id}`);
    const data = await response.json()

    console.log(data);
}

// fetchBlog()

const blog = { 
    title:"Here is a title", 
    body:"here is the body", 
    author:"Sami" }

const addBlog = async () => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
const json = await response.json()
}

// addBlog()

// updateBlog()
// deleteBlog()