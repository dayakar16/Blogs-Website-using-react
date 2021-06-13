import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title,settitle] = useState('');
    const [body,setbody] = useState('');
    const [author,setauthor] = useState('Daya');
    const [ispending,setispending] = useState(false)
    const history = useHistory();
     const handlesubmit =(e)=> {
         e.preventDefault();
         const blog = {title, body, author}
         
            setispending(true);

         fetch('http://localhost:8000/blogs',{
             method: 'POST',
             headers: {'Content-Type':"application/json"},
             body: JSON.stringify(blog)
         }).then(()=> { console.log("new blog added");
            setispending(false);
            history.push('/');
        })
     }

    return ( <div className="create">
    <h2>Add a new Blog</h2>
    <form onSubmit={handlesubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} onChange={(e)=> settitle(e.target.value)} >
        </input>
        <label>Blog Body</label>
        <textarea required value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e)=>setauthor(e.target.value)}>
            <option value="Daya">Daya</option>
            <option value="Leenu">Leenu</option>
        </select>
       {!ispending && <button>Add blog</button>} 
       {ispending && <button>Adding blog...</button>}
    </form>
</div> );
}
 
export default Create;