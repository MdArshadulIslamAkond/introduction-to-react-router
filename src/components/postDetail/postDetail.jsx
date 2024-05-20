import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
    const postDetail = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = ()=>{
        navigate(-1)
    }
    const {id, title, body} = postDetail
    return (
       
        <div>
           <h3>Post details about:{id}</h3> 
           <p>Title: {title} </p>
           <p><small>{body}</small></p>
           <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;