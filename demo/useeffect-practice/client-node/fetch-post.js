
const apiUrl = 'http://localhost:3001/api/blogs/';

const blog = { 
    title:"Here is a title", 
    body:"here is the body 2023-09-13", 
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

addBlog()

