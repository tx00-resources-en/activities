
const apiUrl = 'http://localhost:3001/api/blogs/';

const fetchBlogs = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    console.log(data);
}

fetchBlogs()
