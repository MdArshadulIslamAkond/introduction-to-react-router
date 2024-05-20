import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    // console.log(post);
    const navigate = useNavigate();
    const postStyle = {
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        margin: '10px'
        // textAline:'center'
      }
      const handleShowDetails = ()=>{
navigate(`/posts/${id}`)
      }
    // eslint-disable-next-line react/prop-types
    const {id, title} = post;
    return (
        <div style={postStyle} >
            <h4>Post of Id: {id} </h4>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Post Details</Link>
            {/* <Link to={`/posts/${id}`}><button>Click Me</button></Link> */}
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;