import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    console.log(error);
    const handleBack = ()=>{
        // <Navigate to='/' />
        navigate('/')
    }
    return (
        <div>
            <h2>Oops!!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status ===404 && <div> <h3>Page not found</h3> <button onClick={handleBack}>Back</button></div>
            }
            {/* {
                error.status ===404 && <div> <h3>Page not found</h3> <Link to ='/' ><button >Back</button></Link></div>
            } */}
        </div>
    );
};

export default ErrorPage;