import { useLoaderData } from "react-router-dom";
import User from "../user/user";
import './users.css'

const Users = () => {
  const users = useLoaderData();
  
  return (
    <div>
      <h2>Our users: {users.length}</h2>
      <p>Funtastic anr cool users</p>
      <div className="users">
        {users.map((user) => {
         return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
