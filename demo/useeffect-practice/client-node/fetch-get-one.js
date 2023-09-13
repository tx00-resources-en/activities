
const apiUrl = 'http://localhost:3001/api/blogs/';



let id="6500194c30e0d19c62dbd324"
const fetchBlog = async () => {
    const response = await fetch(`${apiUrl}/${id}`)
    console.log(`${apiUrl}/${id}`);
    const data = await response.json()

    console.log(data);
}

fetchBlog()

