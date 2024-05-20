import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const User = ({user}) => {
//    console.log(user);
   const userStyle = {
    border:'2px solid yellow',
    padding:'10px',
    borderRadius:'10px',
    margin: '10px'
    // textAline:'center'
  }
    // eslint-disable-next-line react/prop-types
    const {id, name, email, phone} = user;
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone: {phone} </p>
            <Link to={`/users/${id}`} >Show Details</Link>
        </div>
    );
};

export default User;