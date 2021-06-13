import BlogList from "./BlogList";
import useFetch from "./useFetch"


const Home = () => {

   //const [name, setName] = useState("Daya")
   //const [age, setAge] = useState(25)

 //   const [blogs,setBlogs] = useState([{title:"Mathematics",    id:1, author:"Daya"
  // }, {title:"Physics",id:2, author:"Leenu" }, {title:"Programming", id:3, author:"Daya" }]); 

  // const [blogs,setBlogs] = useState([null])
   
   // const ClickEvent = () => {
   //     console.log("Button 1 clicked");
    //    setName("leenu")
    //    setAge(22)
   // } 
 
    //const clickEvent = (name) => {
    //    console.log("Button 2 clicked name is "+ name);     
    //}


    //const handledelete = (id) => {
     //       const newblogs = blogs.filter((blog)=> blog.id !== id)
      //        setBlogs(newblogs)
    //}


   const {data, isPending} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {isPending && <div>Loading....</div>}
         {//   <h2>Home page</h2>
           // <p>{name} is {age} years old</p>
           // <button onClick={ClickEvent}>Click Me</button>
            //<button onClick={()=> {clickEvent("daya")}}>Click Me Again</button>
            // <BlogList blogs={blogs.filter((blog)=> blog.author==="Daya")} title="Daya Subject's" ></BlogList>
         }
          {data && <BlogList blogs={data} title="All Subjects"  ></BlogList> }
        </div>
     );
}   
 
export default Home;