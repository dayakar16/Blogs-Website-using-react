import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, ispending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handledelete = ()=> {
        fetch('http://localhost:8000/blogs/' + blog.id,{method: "DELETE"}).then(()=> history.push('/'));
    }


    return (<div className="blog-details">
        {ispending && <div>Loading....</div>}
        { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Professor is {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handledelete}>Delete</button>
            </article>
        )}

    </div>);
}

export default BlogDetails;