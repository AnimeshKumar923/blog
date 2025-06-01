import "./App.css";
import NavBar from "./components/NavBar.jsx";
import BlogCard from "./components/BlogCard.jsx";
import Home from "./components/Home.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Home>
        <div className="title">
          <h1>Personal Blog</h1>
          <h3>Welcome to my blog!</h3>
        </div>
        <BlogCard name="first" />
        <BlogCard name="second" />
      </Home>
    </>
  );
}

export default App;
