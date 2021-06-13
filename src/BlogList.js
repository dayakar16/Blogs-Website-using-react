import {Link} from 'react-router-dom'

const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-preview">
            <h1>{title}</h1>
           {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h1>{blog.title}</h1>
                    <p>{blog.author}</p>
                    </Link>
                    

                  { // <button onClick={()=>{handledelete(blog.id)}}>Delete blog</button>
}
                </div>
                 ))}
        </div>


      );
}
 
export default BlogList;