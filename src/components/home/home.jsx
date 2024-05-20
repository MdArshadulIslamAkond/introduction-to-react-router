import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

// import About from "../about/about";
// import Contact from "../contact/contact";
// import Users from "../users/users";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
  return (
    <div>
      <Header />
      {
        navigation.state === 'loading' ? <p>Loading...</p> : <Outlet />
      }
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="users" element={<Users />} loader={()=>fetch('https://jsonplaceholder.typicode.com/users') }/>
        {/* <Route path="/" element={<h1>Home</h1>} />
                <Route path="about" element={<h1>About</h1>} />
                <Route path="contact" element={<h1>Contact</h1>} /> 
        <Route path="*" element={<h1>404</h1>} />
      </Routes> */}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Home;
